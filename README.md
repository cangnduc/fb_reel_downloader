# Facebook Reels Knowledge Base

This project downloads UX/UI design reels from a Facebook profile, analyzes
the videos with the Gemini API, and stores the results as searchable knowledge
cards.

## What is included

- `fb_reels.js` enumerates reels and downloads missing videos with `yt-dlp`.
- `build_knowledge.js` uploads videos to Gemini and creates structured cards.
- `reels.md` is the generated human-readable download catalog.
- `reels_list.json` is the generated machine-readable reel metadata.
- `knowledge/` contains JSON cards, plain-text transcripts, and `index.md`.

Downloaded videos are intentionally ignored by Git because they are large.
Facebook cookies and Gemini API keys are also ignored and must never be
committed.

## Requirements

- Node.js 18 or newer
- `yt-dlp`
- FFmpeg
- `curl` (included with current Windows versions)
- A Facebook account that can view the target profile's reels
- A Gemini API key for video analysis

Install the Node dependencies from the repository root:

```powershell
npm install
```

`fb_reels.js` currently looks for `yt-dlp` on `PATH` or in its configured
Windows WinGet location. It also passes the configured WinGet FFmpeg directory
to `yt-dlp` so video and audio are merged into MP4 files.

## Local configuration

### Facebook cookies

Export cookies while logged into `facebook.com` using a browser extension such
as **Get cookies.txt LOCALLY**, then save the Netscape-format export as:

```text
cookies.txt
```

Keep this file private. If Facebook requests start returning HTML errors, the
cookies may have expired and need to be exported again.

### Gemini API key

Create a `.env` file in the repository root:

```text
GEMINI_API_KEY=your_api_key_here
```

Alternatively, set `GEMINI_API_KEY` in the shell or place the key in
`gemini_key.txt`. The `.env` and `gemini_key.txt` files are ignored by Git.

## Usage

Run these commands from the repository root.

### Download new reels

```powershell
node fb_reels.js
```

The downloader refreshes `reels_list.json` and `reels.md`, then downloads only
videos that are not already present in `reels/`.

To list reels without downloading:

```powershell
node fb_reels.js --list
```

To download one reel:

```powershell
node fb_reels.js --id 1234567890
```

### Build knowledge cards

```powershell
node build_knowledge.js
```

The analyzer skips reels that already have a card in `knowledge/`, so it is
safe to re-run after rate limits or network failures. Failed items are printed
at the end of the run.

Useful options:

```powershell
# Process one reel
node build_knowledge.js --only 1234567890

# Process only the first three pending reels
node build_knowledge.js --limit 3

# Rebuild an existing card
node build_knowledge.js --only 1234567890 --force

# Select a specific Gemini model
node build_knowledge.js --model gemini-3-flash-preview
```

Each successful analysis writes:

- `knowledge/<id>.json`
- `knowledge/transcripts/<id>.txt`

The script also refreshes `knowledge/index.md`.

## Recommended maintenance loop

1. Run `node fb_reels.js`.
2. Run `node build_knowledge.js`.
3. Review `knowledge/index.md` for new lessons.

## Important implementation notes

- Facebook GraphQL requests intentionally use bare POST requests. Do not add
  browser-style headers to them; Facebook's WAF may return an HTML 400 page.
- Facebook rotates GraphQL document IDs. The downloader re-mines the ID from
  Facebook's JavaScript bundles when necessary.
- The target profile is accessed by numeric ID, not a vanity username.
- Gemini processing is resumable and includes retries for rate limits,
  temporary server errors, and network failures.

## Security

Never commit or share:

- `cookies.txt`, which contains Facebook session credentials
- `.env` or `gemini_key.txt`, which may contain the Gemini API key
- downloaded videos in `reels/`

If credentials are exposed, revoke or rotate them immediately.
