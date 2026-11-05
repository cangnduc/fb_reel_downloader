#!/usr/bin/env node
/**
 * build_knowledge.js — per-reel knowledge cards via the Gemini video API
 * (official @google/genai SDK).
 *
 * For each reels/<date>_<id>.mp4 this:
 *   1. uploads the mp4 to Google's Files API (deleted again afterwards),
 *   2. asks Gemini to analyze BOTH the narration and the visuals, returning
 *      structured JSON: title, summary, timestamped transcript, on-screen
 *      text, UI patterns, design principles, before/after, tags,
 *   3. writes  knowledge/<id>.json             (machine layer)
 *              knowledge/transcripts/<id>.txt  (plain timestamped transcript)
 *   and at the end  knowledge/index.md         (human catalog of all cards).
 *
 * Resumable: reels with an existing knowledge/<id>.json are skipped
 * (--force re-does them), so just re-run if a batch hits rate limits.
 *
 * Usage:
 *   node build_knowledge.js                 all reels
 *   node build_knowledge.js --only 123      one reel id
 *   node build_knowledge.js --limit 3       first N (test run)
 *   node build_knowledge.js --model gemini-3-flash   override model
 *   node build_knowledge.js --force         redo existing cards
 *
 * API key: GEMINI_API_KEY / GOOGLE_API_KEY env var, or a gemini_key.txt
 * file next to this script. Free key: https://aistudio.google.com/apikey
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const HERE = __dirname;
const REELS_DIR = path.join(HERE, 'reels');
const KNOW_DIR = path.join(HERE, 'knowledge');
const TR_DIR = path.join(KNOW_DIR, 'transcripts');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ------------------------------------------------------------------- key ---

function readKey() {
  // .env file (KEY=VALUE lines) next to this script
  const envFile = path.join(HERE, '.env');
  if (fs.existsSync(envFile)) {
    for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*(GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_AI_STUDIO_KEY)\s*=\s*(.+)\s*$/);
      if (m) return m[2].trim().replace(/^["']|["']$/g, '');
    }
  }
  const env = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_AI_STUDIO_KEY;
  if (env) return env.trim();
  const f = path.join(HERE, 'gemini_key.txt');
  if (fs.existsSync(f)) return fs.readFileSync(f, 'utf8').trim();
  console.error('[x] no API key — put GEMINI_API_KEY=<your key> in .env (or gemini_key.txt)');
  console.error('    get one free at https://aistudio.google.com/apikey');
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey: readKey() });

// ------------------------------------------------------------- the prompt --

const RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    title: { type: 'STRING', description: 'concise title of the design lesson' },
    summary: { type: 'STRING', description: '2-3 sentence summary of what the reel teaches' },
    transcript: {
      type: 'ARRAY',
      description: 'full narration transcript',
      items: {
        type: 'OBJECT',
        properties: {
          t: { type: 'STRING', description: 'timestamp mm:ss' },
          text: { type: 'STRING' },
        },
        required: ['t', 'text'],
      },
    },
    on_screen_text: { type: 'ARRAY', items: { type: 'STRING' }, description: 'notable captions/text shown on screen' },
    ui_patterns: { type: 'ARRAY', items: { type: 'STRING' }, description: 'UI components/patterns demonstrated' },
    design_principles: { type: 'ARRAY', items: { type: 'STRING' }, description: 'specific rules or principles taught' },
    before_after: { type: 'STRING', description: 'the transformation shown, if any (empty string if none)' },
    tags: { type: 'ARRAY', items: { type: 'STRING' } },
  },
  required: ['title', 'summary', 'transcript', 'on_screen_text', 'ui_patterns', 'design_principles', 'before_after', 'tags'],
};

const PROMPT = `This is a short vertical video (a UX/UI design tips reel). Analyze BOTH the spoken narration and the visuals carefully, frame by frame.
- transcribe the complete narration with timestamps (mm:ss, relative to video start)
- capture important on-screen text/captions (these often carry the key lesson)
- name the UI patterns/components actually shown
- extract the concrete design rules or principles being taught
- if there is a before/after transformation, describe it
Be specific to what is actually shown and said; do not invent content.`;

// ------------------------------------------------------------- gemini api --

const statusOf = (e) => Number(e?.status ?? e?.code ?? e?.error?.code ?? 0);
// connection-level failures ("fetch failed", ECONNRESET, timeouts...) carry no
// HTTP status — detect them so a network drop doesn't kill the batch
const isNetworkError = (e) => statusOf(e) === 0
  && (/fetch failed|ECONN|ETIMEDOUT|ENOTFOUND|socket|network/i.test(String(e.message))
    || e?.cause != null);

async function withRetry(fn, label, tries = 5) {
  let lastErr;
  for (let i = 1; i <= tries; i++) {
    try { return await fn(); } catch (e) {
      lastErr = e;
      const s = statusOf(e);
      const retryable = s === 429 || s >= 500 || isNetworkError(e);
      if (retryable && i < tries) {
        const wait = (s === 429 ? 20000 : 15000) * i; // rate limits / 5xx / network — back off
        console.warn(`[!] ${label} ${s ? `HTTP ${s}` : 'network error'} (${String(e.message).slice(0, 60)}), retry ${i}/${tries - 1} in ${wait / 1000}s`);
        await sleep(wait);
        continue;
      }
      throw e;
    }
  }
  throw lastErr;
}

/** pick a video-capable model from the account's model list */
async function pickModel(preferred) {
  if (preferred) return preferred;
  const names = [];
  const pager = await ai.models.list({ config: { pageSize: 200 } });
  for await (const m of pager) names.push(String(m.name).replace(/^models\//, ''));
  const prefer = [
    /gemini-3[\d.]*-flash/, /gemini-flash-latest/, /gemini-2\.5-flash/,
    /gemini-3[\d.]*-pro/, /gemini-2\.5-pro/,
  ];
  for (const re of prefer) {
    const hit = names.find((n) => re.test(n) && !/embedding|tts|image|live|native/i.test(n));
    if (hit) return hit;
  }
  throw new Error(`no suitable model among: ${names.join(', ')}`);
}

/** upload a video and wait until it is processed; returns the file resource */
async function uploadVideo(file) {
  const up = await withRetry(
    () => ai.files.upload({
      file, // path string — the SDK fs.stats it to get the size
      config: { mimeType: 'video/mp4', displayName: path.basename(file) },
    }),
    'upload',
  );
  for (let i = 0; i < 60; i++) {
    if (up.state === 'ACTIVE') return up;
    if (up.state === 'FAILED') throw new Error('file processing failed');
    await sleep(2000);
    const s = await withRetry(() => ai.files.get({ name: up.name }), 'file status');
    if (s.state === 'ACTIVE') return s;
    if (s.state === 'FAILED') throw new Error('file processing failed');
  }
  throw new Error('file stuck in processing');
}

async function analyzeVideo(model, fileUri) {
  const res = await withRetry(() => ai.models.generateContent({
    model,
    contents: [{
      role: 'user',
      parts: [
        { fileData: { fileUri, mimeType: 'video/mp4' } },
        { text: PROMPT },
      ],
    }],
    config: {
      temperature: 0.2,
      responseMimeType: 'application/json',
      responseSchema: RESPONSE_SCHEMA,
    },
  }), 'generate');
  const text = res.text;
  if (!text) throw new Error('model returned no text');
  try { return JSON.parse(text); } catch { throw new Error(`bad JSON from model: ${text.slice(0, 120)}`); }
}

// --------------------------------------------------------------- pipeline --

function reelFiles() {
  return fs.readdirSync(REELS_DIR)
    .filter((f) => f.endsWith('.mp4'))
    .map((f) => {
      const id = (f.match(/_(\d+)\.mp4$/) || [])[1] || f.replace(/\.mp4$/, '');
      return { file: path.join(REELS_DIR, f), id, fname: f };
    })
    .sort((a, b) => a.fname.localeCompare(b.fname));
}

function writeTranscriptTxt(id, card) {
  const lines = card.transcript?.map((s) => `[${s.t}] ${s.text}`) || [];
  const head = [
    `# ${card.title || id}`,
    `${card.date || ''} · https://www.facebook.com/reel/${id}`,
    '',
  ];
  fs.writeFileSync(path.join(TR_DIR, `${id}.txt`), head.concat(lines).join('\n'), 'utf8');
}

async function processReel(model, r) {
  console.log(`[>] ${r.fname} (${Math.round(fs.statSync(r.file).size / 1024 / 1024 * 10) / 10} MB) ...`);
  const vf = await uploadVideo(r.file);
  try {
    const card = await analyzeVideo(model, vf.uri);
    card.id = r.id;
    card.date = (r.fname.match(/^(\d{4}-\d{2}-\d{2})_/) || [])[1] || null;
    card.url = `https://www.facebook.com/reel/${r.id}`;
    card.file = r.fname;
    fs.writeFileSync(path.join(KNOW_DIR, `${r.id}.json`), JSON.stringify(card, null, 2));
    writeTranscriptTxt(r.id, card);
    console.log(`[✓] ${r.id}: "${card.title}" (${card.transcript?.length || 0} transcript lines)`);
  } finally {
    try { await ai.files.delete({ name: vf.name }); } catch { /* best effort */ }
  }
}

function writeIndex() {
  const cards = fs.readdirSync(KNOW_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(KNOW_DIR, f), 'utf8')))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  let md = `# Reel knowledge base — ${cards.length} cards\n\n`;
  md += `Generated ${new Date().toISOString().slice(0, 10)} by build_knowledge.js · cards in knowledge/, plain transcripts in knowledge/transcripts/\n`;
  for (const c of cards) {
    md += `\n---\n\n### ${c.date || '????-??-??'} — [${c.title || c.id}](${c.url})\n\n${c.summary || ''}\n`;
    if (c.design_principles?.length) md += `\n**Principles:** ${c.design_principles.map((p) => `\`${p}\``).join(' · ')}\n`;
    if (c.ui_patterns?.length) md += `\n**UI patterns:** ${c.ui_patterns.join(', ')}\n`;
    if (c.before_after) md += `\n**Before → After:** ${c.before_after}\n`;
    if (c.tags?.length) md += `\n**Tags:** ${c.tags.join(', ')}\n`;
    md += `\nTranscript: \`transcripts/${c.id}.txt\` · Card: \`${c.id}.json\`\n`;
  }
  fs.writeFileSync(path.join(KNOW_DIR, 'index.md'), md);
  console.log(`[✓] index: knowledge/index.md (${cards.length} cards)`);
}

// ------------------------------------------------------------------ main ---

async function main() {
  const args = process.argv.slice(2);
  const flag = (name) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : null;
  };
  fs.mkdirSync(TR_DIR, { recursive: true });

  const model = await withRetry(() => pickModel(flag('--model')), 'model list');
  console.log(`[*] model: ${model}`);

  let reels = reelFiles();
  if (flag('--only')) reels = reels.filter((r) => r.id === flag('--only'));
  if (flag('--limit')) reels = reels.slice(0, Number(flag('--limit')));
  if (!args.includes('--force')) {
    reels = reels.filter((r) => !fs.existsSync(path.join(KNOW_DIR, `${r.id}.json`)));
  }
  console.log(`[*] ${reels.length} reels to process`);

  let ok = 0; const failed = [];
  for (const r of reels) {
    try {
      await processReel(model, r);
      ok++;
    } catch (e) {
      console.warn(`[!] failed ${r.id}: ${String(e.message).slice(0, 160)}`);
      failed.push(r.id);
    }
    await sleep(3000); // stay under rate limits
  }
  console.log(`\n[✓] done — ${ok} processed, ${failed.length} failed`);
  if (failed.length) console.log(`    failed: ${failed.join(', ')}`);
  writeIndex();
}

main().catch((e) => { console.error(`[x] ${e.message}`); process.exit(1); });
