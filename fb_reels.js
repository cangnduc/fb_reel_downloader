#!/usr/bin/env node
/**
 * fb_reels.js — list & download ALL reels of a Facebook profile.
 *
 * How it works:
 *   1. Fetches the profile's reels tab HTML with your session cookies
 *      (cookies.txt, exported with a "Get cookies.txt" browser extension).
 *   2. Extracts the CSRF tokens (fb_dtsg, lsd), the first batch of reel IDs
 *      and the GraphQL query info embedded in the page.
 *   3. Paginates Facebook's internal GraphQL API
 *      (ProfileCometAppCollectionReelsRendererPaginationQuery) until every
 *      reel has been collected. The doc_id is re-mined from FB's JS bundles
 *      automatically when Facebook rotates it.
 *   4. Downloads each reel with yt-dlp at best quality.
 *
 * Usage:
 *   node fb_reels.js            list + download missing reels into ./reels/
 *   node fb_reels.js --list     only list reels (no download)
 *   node fb_reels.js --id 123   download a single reel by video id
 *
 * Requires: node, yt-dlp (on PATH or in the winget location below),
 *           cookies.txt next to this script.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// ---------------------------------------------------------------- config ---

const PROFILE_ID = process.env.FB_PROFILE_ID || '61588326206046';
const BASE = 'https://www.facebook.com';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0';
const REELS_URL = `${BASE}/profile.php?id=${PROFILE_ID}&sk=reels_tab`;
const GRAPHQL = `${BASE}/api/graphql/`;

const HERE = __dirname;
const COOKIE_FILE = path.join(HERE, 'cookies.txt');
const OUT_DIR = path.join(HERE, 'reels');
const LIST_FILE = path.join(HERE, 'reels_list.json');

// doc_id of ProfileCometAppCollectionReelsRendererPaginationQuery.
// Facebook rotates these; if the request fails we re-mine it from the JS bundles.
let REELS_PAGINATION_DOC_ID = '28838816002422324';
const SECTION_DOC_ID = '27593212700355567'; // ProfileCometTopAppSectionQuery

const YTDLP_CANDIDATES = [
  'yt-dlp',
  path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Packages',
    'yt-dlp.yt-dlp_Microsoft.Winget.Source_8wekyb3d8bbwe', 'yt-dlp.exe'),
];

// ffmpeg from the winget yt-dlp.FFmpeg package (not on yt-dlp's PATH)
const FFMPEG_DIR = path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Packages',
  'yt-dlp.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe',
  'ffmpeg-N-126374-g089a48eb36-win64-gpl', 'bin');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --------------------------------------------------------------- cookies ---

function loadCookies() {
  if (!fs.existsSync(COOKIE_FILE)) {
    console.error(`[!] cookies.txt not found at ${COOKIE_FILE}`);
    console.error('    Export it from your browser with a "Get cookies.txt" extension while logged into facebook.com.');
    process.exit(1);
  }
  const jar = [];
  for (const line of fs.readFileSync(COOKIE_FILE, 'utf8').split(/\r?\n/)) {
    if (!line || line.startsWith('#')) continue;
    const f = line.split('\t');
    if (f.length !== 7) continue;
    const [domain, , , , , name, value] = f;
    if (!/facebook\.com$/.test(domain.replace(/^\./, ''))) continue;
    jar.push(`${name}=${value}`);
  }
  if (!jar.length) {
    console.error('[!] no facebook.com cookies found in cookies.txt');
    process.exit(1);
  }
  return jar.join('; ');
}
const COOKIE_HEADER = loadCookies();

// ---------------------------------------------------------------- fetch ----

function curl(url, opts = {}) {
  const args = ['-s', '-b', COOKIE_FILE];
  if (opts.form) {
    // NB: for GraphQL POSTs, a bare request (no UA/Referer/extra headers) is
    // what Facebook's WAF accepts; adding browser-ish headers gets a 400 page.
    if (opts.origin) args.push('-H', `Origin: ${opts.origin}`);
    for (const [k, v] of Object.entries(opts.form)) {
      args.push('--data-urlencode', `${k}=${v}`);
    }
  } else {
    args.push('--compressed', '-L', '--max-redirs', '3',
      '-A', UA,
      '-H', 'Accept-Language: en-US,en;q=0.9',
      '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      '-H', 'Sec-Fetch-Dest: document', '-H', 'Sec-Fetch-Mode: navigate',
      '-H', 'Sec-Fetch-Site: none', '-H', 'Sec-Fetch-User: ?1',
      '-H', 'Upgrade-Insecure-Requests: 1');
    if (opts.referer) args.push('-H', `Referer: ${opts.referer}`);
  }
  args.push('-w', '\n__CURL_META__%{http_code}', url);
  const res = spawnSync('curl', args, { encoding: 'buffer', maxBuffer: 256 * 1024 * 1024 });
  if (res.status !== 0) throw new Error(`curl failed (exit ${res.status}): ${res.stderr}`);
  const out = res.stdout.toString('utf8');
  const marker = '\n__CURL_META__';
  const idx = out.lastIndexOf(marker);
  const code = Number(out.slice(idx + marker.length).trim());
  const body = out.slice(0, idx);
  return { code, body };
}

// ----------------------------------------------------------- html mining ---

function fetchReelsTab() {
  console.log('[*] fetching reels tab HTML ...');
  const { code, body } = curl(REELS_URL, { referer: BASE });
  if (code !== 200 || body.length < 100000) {
    throw new Error(`unexpected reels tab response (HTTP ${code}, ${body.length} bytes) — cookies expired?`);
  }
  fs.writeFileSync(path.join(HERE, '_reels_tab.html'), body);
  return body;
}

function extractTokens(html) {
  const dtsg = html.match(/"DTSGInitialData",\[\],\{"token":"([^"]+)"/)?.[1];
  const lsd = html.match(/"LSD",\[\],\{"token":"([^"]+)"/)?.[1];
  if (!dtsg || !lsd) throw new Error('could not extract fb_dtsg / lsd from page');
  return { dtsg, lsd };
}

function extractSectionVars(html) {
  // variables blob of the ProfileCometTopAppSectionQuery preloader (has the pv flags)
  const m = html.match(/adp_ProfileCometTopAppSectionQueryRelayPreloader_[^"]+","queryID":"(\d+)","variables":(\{.*?\}),"queryName"/);
  if (!m) throw new Error('TopAppSection preloader not found in HTML');
  return { sectionDocId: m[1], vars: JSON.parse(m[2]) };
}

// --------------------------------------------------------------- graphql ---

async function graphql(docId, variables, tokens) {
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const { code, body } = curl(GRAPHQL, {
      origin: BASE,
      referer: REELS_URL,
      form: {
        fb_dtsg: tokens.dtsg,
        lsd: tokens.lsd,
        doc_id: String(docId),
        variables: JSON.stringify(variables),
      },
    });
    try {
      return parseFbJson(body, code);
    } catch (e) {
      lastErr = e;
      // FB's WAF intermittently rejects these POSTs with an HTML 400 page — retry
      if (/HTML|empty/.test(e.message) && attempt < 4) {
        await sleep(2500 * attempt);
        continue;
      }
      throw e;
    }
  }
  throw lastErr;
}

/** Facebook responses come as `for (;;);{...}` or plain JSON (possibly JSONL). */
function parseFbJson(body, code) {
  if (!body.trim()) throw new Error(`empty GraphQL response (HTTP ${code}) — session throttled? retry later`);
  const clean = body.replace(/^for\s*\(;;\);?/gm, '').trim();
  const objects = [];
  for (const line of clean.split(/\r?\n/)) {
    const t = line.trim();
    if (!t.startsWith('{')) continue;
    try { objects.push(JSON.parse(t)); } catch { /* partial line, skip */ }
  }
  if (!objects.length) {
    if (clean.startsWith('<')) throw new Error(`GraphQL returned HTML (HTTP ${code}) — request rejected`);
    throw new Error(`unparseable GraphQL response (HTTP ${code}): ${clean.slice(0, 120)}`);
  }
  // responses are stream/defer JSONL — keep ALL line objects (merging would
  // make each line's "data" clobber the previous one)
  return objects;
}

/** Deep-walk any JSON value. cb gets every object node. */
function walk(value, cb) {
  if (Array.isArray(value)) { for (const v of value) walk(v, cb); return; }
  if (value && typeof value === 'object') { cb(value); for (const v of Object.values(value)) walk(v, cb); }
}

function collectVideos(root) {
  // `creation_time` and the caption (`message.text`) live on an ancestor
  // (Story-ish wrapper) of the Video node, so carry the nearest ancestor's
  // values down while recursing
  const videos = new Map(); // id -> {id, time, url, desc}
  (function visit(value, ctx) {
    if (Array.isArray(value)) { for (const v of value) visit(v, ctx); return; }
    if (!value || typeof value !== 'object') return;
    const next = {
      time: Number.isFinite(value.creation_time) ? value.creation_time : ctx.time,
      desc: (value.message && typeof value.message.text === 'string' && value.message.text.trim())
        ? value.message.text.trim() : ctx.desc,
    };
    if (value.__typename === 'Video' && /^\d+$/.test(String(value.id))) {
      if (!videos.has(value.id)) {
        videos.set(value.id, {
          id: value.id,
          time: next.time,
          url: value.url || value.permalink_url || `${BASE}/reel/${value.id}`,
          desc: next.desc || null,
        });
      }
    }
    for (const v of Object.values(value)) visit(v, next);
  })(root, { time: null, desc: null });
  return videos;
}

function collectPageInfos(root) {
  const infos = [];
  walk(root, (o) => {
    if (o.page_info && typeof o.page_info.end_cursor === 'string') {
      infos.push(o.page_info);
    }
  });
  return infos;
}

/** First reels batch is embedded in the tab HTML as flat Video JSON objects. */
function extractFirstBatchFromHtml(html) {
  const videos = new Map();
  const re = /\{"__typename":"Video","self_view_boost":null,"id":"(\d+)".*?"creation_time":(\d+)/g;
  let m;
  while ((m = re.exec(html))) {
    if (!videos.has(m[1])) videos.set(m[1], { id: m[1], time: Number(m[2]), url: null });
  }
  // some Video nodes lack creation_time right after id; catch those ids too
  const re2 = /\{"__typename":"Video","self_view_boost":null,"id":"(\d+)"/g;
  while ((m = re2.exec(html))) {
    if (!videos.has(m[1])) videos.set(m[1], { id: m[1], time: null, url: null });
  }
  return videos;
}

// ----------------------------------------------------- doc_id re-mining ----

async function reminePaginationDocId(html) {
  console.log('[*] re-mining pagination doc_id from JS bundles ...');
  const urls = [...new Set(
    (html.match(/https:\\\/\\\/static\.xx\.fbcdn\.net\\\/rsrc\.php\\\/[a-zA-Z0-9._\\\/-]*\.js/g) || [])
      .map((u) => u.replace(/\\/g, ''))
  )];
  for (const u of urls) {
    let body;
    try { body = curl(u).body; } catch { continue; }
    const m = body.match(/"ProfileCometAppCollectionReelsRendererPaginationQuery_facebookRelayOperation",\[\],\(function\([^)]*\)\{[^}]*exports="(\d+)"/);
    if (m) {
      console.log(`[+] fresh doc_id: ${m[1]}`);
      return m[1];
    }
  }
  throw new Error('could not re-mine pagination doc_id from bundles');
}

// ------------------------------------------------------- list all reels ----

async function listAllReels() {
  const html = fetchReelsTab();
  const tokens = extractTokens(html);

  // first batch comes embedded in the HTML itself
  let videos = extractFirstBatchFromHtml(html);
  console.log(`[+] first batch: ${videos.size} reels (from HTML)`);

  // run the section query to get a clean cursor + collection token
  const { sectionDocId, vars: sectionVars } = extractSectionVars(html);
  let section;
  try {
    section = await graphql(sectionDocId || SECTION_DOC_ID, sectionVars, tokens);
    console.log(`[*] section query: ${section.length} JSONL lines, ${collectVideos(section).size} videos`);
  } catch (e) {
    console.warn(`[!] section query failed: ${e.message} — continuing with HTML batch`);
  }

  const collectionToken = JSON.stringify(section || {})
    .match(/"id":"(YXBwX2NvbGxlY3Rpb246[^"]+)"/)?.[1]
    || html.match(/"id":"(YXBwX2NvbGxlY3Rpb246[^"]+)"/)?.[1];
  if (!collectionToken) throw new Error('collection token not found');

  // merge videos from the section response too
  if (section) for (const [k, v] of collectVideos(section)) videos.set(k, v);

  // paginate
  const pvFlags = {};
  for (const [k, v] of Object.entries(sectionVars)) {
    if (k.startsWith('__relay_internal__pv__')) pvFlags[k] = v;
  }
  let cursors = collectPageInfos(section || {}).map((p) => p.end_cursor);
  if (!cursors.length) {
    cursors = [...new Set([...html.matchAll(/"end_cursor":"([^"]+)"/g)].map((m) => m[1]))];
  }

  const seenCursors = new Set();
  let page = 0;
  while (cursors.length && page < 300) {
    const cursor = cursors.shift();
    if (seenCursors.has(cursor)) continue;
    seenCursors.add(cursor);
    page++;
    const variables = {
      count: 12,
      cursor,
      id: collectionToken,
      ...pvFlags,
    };
    let resp;
    try {
      resp = await graphql(REELS_PAGINATION_DOC_ID, variables, tokens);
    } catch (e) {
      console.warn(`[!] pagination page ${page} failed: ${e.message}`);
      if (/rejected|HTML/.test(e.message) && page === 1) {
        REELS_PAGINATION_DOC_ID = await reminePaginationDocId(html);
        resp = await graphql(REELS_PAGINATION_DOC_ID, variables, tokens);
      } else continue;
    }
    if (resp[0]?.errors && !resp[0]?.data) {
      console.warn(`[!] GraphQL error: ${resp[0].errors[0]?.message}`);
      continue;
    }
    const newVideos = collectVideos(resp);
    const before = videos.size;
    for (const [k, v] of newVideos) videos.set(k, v);
    const got = videos.size - before;

    // canonical continuation: the list's page_info cursor (what the browser follows).
    // per-item cursors also exist but re-walk overlapping windows — skip them.
    const infos = collectPageInfos(resp).filter((p) => p.has_next_page && !seenCursors.has(p.end_cursor));
    for (const p of infos) cursors.push(p.end_cursor);
    console.log(`[+] page ${page}: +${got} reels (total ${videos.size})`);
    await sleep(1200); // be gentle
  }

  return videos;
}

/** Pull the big embedded JSON blobs out of an FB HTML page and wrap them
 *  so collectVideos/walk can run over a parseable object. */
function safeJsonFromHtml(html) {
  // relay preloader responses live in <script type="application/json"> blobs;
  // the greedy match below just needs *some* valid JSON object containing them.
  const m = html.match(/\{"require":\[.*\],"hs":.*\}/s) || html.match(/\{"__bbox":\{.*\}\}/s);
  if (m) return m[0];
  return '{}';
}

// --------------------------------------------------------------- listing ---

function saveList(videos) {
  const arr = [...videos.values()].sort((a, b) => (b.time || 0) - (a.time || 0));
  fs.writeFileSync(LIST_FILE, JSON.stringify(arr, null, 2));
  return arr;
}

// --------------------------------------------------------------- catalog ----

/** duration/size/resolution of a downloaded file, via ffprobe */
function probe(file) {
  const ffprobe = path.join(FFMPEG_DIR, 'ffprobe.exe');
  if (!fs.existsSync(ffprobe) || !fs.existsSync(file)) return null;
  const r = spawnSync(ffprobe, ['-v', 'error', '-show_entries',
    'format=duration:stream=width,height', '-of', 'json', file],
  { encoding: 'utf8' });
  try {
    const j = JSON.parse(r.stdout);
    const vstream = (j.streams || []).find((s) => s.width && s.height) || {};
    return {
      duration: j.format?.duration ? Math.round(Number(j.format.duration)) : null,
      res: vstream.width ? `${vstream.width}x${vstream.height}` : null,
      bytes: fs.statSync(file).size,
    };
  } catch { return null; }
}

function fmtDuration(s) {
  if (s == null) return '—';
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function fmtBytes(b) {
  if (b == null) return '—';
  if (b > 1024 * 1024) return `${(b / 1024 / 1024).toFixed(1)} MB`;
  return `${Math.round(b / 1024)} KB`;
}

/** markdown catalog of everything enumerated + downloaded */
function writeCatalog(list) {
  const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
  const rows = [];
  let downloaded = 0, totalBytes = 0;
  for (const v of list) {
    const date = v.time ? new Date(v.time * 1000).toISOString().slice(0, 10) : 'unknown date';
    const fname = `${date === 'unknown date' ? 'unknown-date' : date}_${v.id}.mp4`;
    const fpath = path.join(OUT_DIR, fname);
    const p = probe(fpath);
    if (p) { downloaded++; totalBytes += p.bytes; }
    const desc = v.desc ? (v.desc.length > 60 ? `${v.desc.slice(0, 57)}...` : v.desc) : '';
    rows.push({
      month: date.slice(0, 7),
      cells: [
        date,
        p ? '✅' : '❌',
        `[${v.id}](${v.url})`,
        esc(desc),
        p ? `\`${fname}\`` : '—',
        p ? fmtDuration(p.duration) : '—',
        p ? p.res || '—' : '—',
        p ? fmtBytes(p.bytes) : '—',
      ],
    });
  }
  const months = [...new Set(rows.map((r) => r.month))];
  let md = `# Facebook Reels — profile ${PROFILE_ID}\n\n`;
  md += `Catalog generated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} · `
    + `**${list.length} reels** · **${downloaded} downloaded** (${fmtBytes(totalBytes)})\n\n`;
  md += `Re-run \`node fb_reels.js\` to fetch new reels and refresh this file.\n`;
  for (const m of months) {
    md += `\n## ${m}\n\n| Date | ✔ | Reel | Description | File | Len | Res | Size |\n|---|---|---|---|---|---|---|---|\n`;
    for (const r of rows.filter((x) => x.month === m)) md += `| ${r.cells.join(' | ')} |\n`;
  }
  const catFile = path.join(HERE, 'reels.md');
  fs.writeFileSync(catFile, md);
  console.log(`[✓] catalog written: ${catFile}`);
}

// ------------------------------------------------------------- downloading --

function findYtDlp() {
  for (const c of YTDLP_CANDIDATES) {
    const cand = c.endsWith('.exe') ? c : `${c}.exe`;
    try { spawnSync(cand, ['--version'], { stdio: 'ignore' }); if (fs.existsSync(cand)) return cand; } catch { /* keep trying */ }
    const where = spawnSync('where', [cand], { encoding: 'utf8' });
    if (where.status === 0) return where.stdout.trim().split(/\r?\n/)[0];
  }
  throw new Error('yt-dlp not found');
}

function downloadReel(id, meta) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const ytdlp = findYtDlp();
  let date = 'unknown-date';
  if (meta?.time) date = new Date(meta.time * 1000).toISOString().slice(0, 10);
  const out = path.join(OUT_DIR, `${date}_${id}.%(ext)s`);
  const res = spawnSync(ytdlp, [
    '--cookies', COOKIE_FILE,
    '--ffmpeg-location', FFMPEG_DIR,
    '-o', out,
    '--no-overwrites',
    '--no-part',
    '-f', 'bv*+ba/b',
    '--merge-output-format', 'mp4',
    `${BASE}/reel/${id}`,
  ], { stdio: 'inherit' });
  return res.status === 0;
}

// ------------------------------------------------------------------ main ---

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--id')) {
    const id = args[args.indexOf('--id') + 1];
    downloadReel(id, null);
    return;
  }

  const videos = await listAllReels();
  const list = saveList(videos);
  writeCatalog(list);
  console.log(`\n[✓] ${list.length} reels total`);
  for (const v of list) {
    const d = v.time ? new Date(v.time * 1000).toISOString().slice(0, 10) : '????-??-??';
    console.log(`    ${d}  ${v.id}`);
  }

  if (args.includes('--list')) return;

  console.log('\n[*] downloading with yt-dlp ...');
  let ok = 0, fail = 0;
  for (const v of list) {
    const d = v.time ? new Date(v.time * 1000).toISOString().slice(0, 10) : 'unknown-date';
    const existing = fs.existsSync(path.join(OUT_DIR, `${d}_${v.id}.mp4`));
    if (existing) { console.log(`[=] exists: ${d}_${v.id}.mp4`); ok++; continue; }
    console.log(`[>] downloading ${d}_${v.id} ...`);
    if (downloadReel(v.id, v)) ok++; else { fail++; console.warn(`[!] failed: ${v.id}`); }
    await sleep(1500);
  }
  console.log(`\n[✓] done — ${ok} ok, ${fail} failed. Files in ${OUT_DIR}`);
}

main().catch((e) => { console.error(`[x] ${e.message}`); process.exit(1); });
