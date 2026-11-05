# Facebook Reels → Knowledge Base

This project downloads reels from a UX-design creator on Facebook and extracts structured knowledge from each video via the Gemini video API.

**Owner goal:** a personal, growing UI/UX knowledge base. Not a one-off scrape — the value is the maintenance loop.

## Map — what's here

```
fb_reels.js          download tool: enumerates reels via FB's internal GraphQL, downloads via yt-dlp
build_knowledge.js   uploads each new mp4 to Gemini, writes knowledge cards (@google/genai SDK)
cookies.txt          Facebook session cookies  [SENSITIVE — user's login]
.env                 Gemini API key (GEMINI_API_KEY=...)  [SENSITIVE]
reels/               78 videos, named <date>_<video-id>.mp4  (220 MB)
reels.md             download catalog (auto-refreshed by fb_reels.js)
reels_list.json      machine-readable reel metadata
knowledge/           <id>.json knowledge cards · transcripts/<id>.txt · index.md (start here)
package.json         deps: @google/genai (node ≥18, uses global fetch)
```

## Where to start, by task

**"Fetch new reels" (the routine):**
1. `node fb_reels.js` — enumerates the profile, downloads only missing videos, refreshes `reels.md`.
2. `node build_knowledge.js` — builds cards for videos lacking one. Both steps are resumable; partial failures → just re-run.
3. Skim `knowledge/index.md` to review the newly extracted lessons.

**"Downloads are failing / HTML fetch errors":** `cookies.txt` expired. Ask the user to re-export from Edge (logged into facebook.com, "Get cookies.txt LOCALLY" extension → save as `cookies.txt` here). Browser must be fully closed only for `--cookies-from-browser`; this project uses the file, so no closing needed.

**"Gemini calls failing":** check `.env` key, then quota (429s auto-retry with backoff; daily free-tier limits → re-run next day, resumable). Model is auto-picked from the account's list (currently `gemini-3-flash-preview`); override with `--model`.

**"Re-do one card":** `node build_knowledge.js --only <id> --force`

**"Search the knowledge":** `knowledge/index.md` (human), `knowledge/*.json` (structured — grep/jq over title, summary, ui_patterns, design_principles, transcript), `knowledge/transcripts/*.txt` (plain text).

## Hard-won constraints (do not "fix" these blindly)

- **FB GraphQL calls must be bare** — no browser-ish User-Agent/Referer headers on POSTs, or Facebook's WAF returns a 400 HTML page. `fb_reels.js` already does this correctly.
- **FB doc_ids rotate.** The pagination doc_id is re-mined from FB's JS bundles automatically when stale. Don't hardcode.
- **yt-dlp needs `--ffmpeg-location`** pointing at the winget FFmpeg dir (`FFMPEG_DIR` in the script) — it's not on yt-dlp's PATH; without it downloads arrive as split video+audio files.
- **Gemini SDK `files.upload` takes a file path string** — a Buffer/stream loses `size_bytes` and the API rejects it.
- **Network drops mid-batch are normal** — both scripts retry, and re-running continues where it left off.
- **Reel `1096164723194043` is dead on Facebook's side** (deleted/private but still indexed). It will show ❌ in `reels.md` forever. Ignore it; it is not fixable.
- The FB profile has **no vanity username** — only `profile.php?id=61588326206046` URLs work.

## Security

`cookies.txt` = the user's Facebook login; `.env` = their Gemini key. Never commit, share, or paste their contents anywhere. This folder is not a git repo — keep secrets out of any future one.

## Provenance

Videos: facebook.com/profile.php?id=61588326206046 (UX/UI design creator the user follows), downloaded 2026-10-09. Knowledge cards: Gemini video analysis, 2026-10-10.
