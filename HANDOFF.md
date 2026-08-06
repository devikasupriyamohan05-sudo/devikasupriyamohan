# HANDOFF — everything an AI (or human) needs to work on this site

Owner: Devika Supriya Mohan · devika.supriyamohan05@gmail.com
Repo: https://github.com/devikasupriyamohan05-sudo/devikasupriyamohan
Live site: via GitHub Pages (Settings → Pages, deploys from `main`, root)
Local editing: clone with GitHub Desktop, edit, Commit to main, Push origin. Site redeploys automatically in ~1 minute.

## What this is
A scrapbook/typewriter-style personal website inspired by prasjain.com. Plain HTML/CSS/JS — no framework, no build step. Open `index.html` locally to preview (needs internet for fonts/CDNs).

Design system: cream background (#fffefb), dark brown ink (#3b2a20), 'Special Elite' (typewriter) for text, 'Caveat' (handwritten) for accents. All CSS custom properties in `css/style.css` under `:root`. Everything lowercase on purpose.

## Pages & how they work
- **index.html** — collage homepage. Snoopy PNG cutouts (in `assets/img/`) are positioned absolutely via `.obj-*` classes in `css/style.css`; labels always visible below each. The welcome line types itself out (typewriter JS at bottom of index.html).
  - Music: clicking the headphones-Snoopy toggles `.playing` on `#vinylWrap` — the blue disc overlay (`disc-spin.png`, positioned at left 50.36% / top 45.33% / width 29.33% over `snoopy-vinyl.png`) spins via CSS, animated ♪ notes bob, and the Spotify iFrame API plays "Open Arms (feat. Travis Scott)" (track ID `7krNZE9zJYqbtybxI3RDfn`). Full song only if visitor is logged into Spotify; 30s preview otherwise — Spotify's rule.
  - Contact: phone-Snoopy opens a popover with LinkedIn / GitHub / email.
- **about.html** — letter (nutshell format: personality first, then professional) + 4 polaroids pinned around it + bucket list. Polaroids auto-load from `assets/photos/about/` with EXACT filenames: `foster-dog.jpg`, `me.jpg`, `rio.jpg`, `orca.jpg`. Change captions in the `<figcaption>` tags.
- **photography.html** — Nikon Coolpix back view; photos display inside its LCD. The screen area is an absolutely positioned div at left 6.7% / top 19.2% / width 57% / height 69.2% over `coolpix-back.png` (whose LCD is painted dark so misalignment never shows white). Photo list = `PHOTOS` array at the bottom of the file; files live in `assets/photos/photography/`. Below: camera collection row (real cutout photos) with labels — the Yashica J is her grandpa's (♡ in label).
- **projects.html** — 4 live Streamlit apps as paper-scrap cards (oil-gas-dashboard, whale-spotter-sf, ocean-impact-ai, databricks-study-hub) + leadership. Links go to live apps and GitHub.
- **professional.html** — experience summary (Frame Data & AI analyst, NexTurn intern, CMU Heinz research), education, skills chips, resume download (`assets/Devika_Supriya_Mohan_Resume.pdf` — replace file, keep name).
- **travel.html** — draggable 3D globe (globe.gl CDN + world-atlas TopoJSON), 35 red dots. Hover = blurb + up to 2 photo thumbs; click = modal with `story` (falls back to `blurb`) + all photos. ALL data in `js/travel-data.js` — one entry per place with lat/lng/region/blurb/story/photos. "33 countries & counting" (PR + Aruba are territories, hence 35 dots).
- **food.html** — "welcome to my belly", Beli link (beliapp.co/app/devikaeats), baking polaroid placeholders to be replaced with `<img>` tags pointing at `assets/photos/food/`.

## Conventions
- Photos: lowercase filenames, no spaces, ≤1600px wide, ~quality 80 JPEG, aim <500KB each.
- Favicon: `assets/img/favicon.png` + `apple-touch-icon.png` (currently Snoopy with heart). Browsers cache favicons hard — test in private window.
- The Snoopy artwork is Peanuts IP — fine for a personal page, swap if the site ever becomes commercial.

## Known state / to-do (as of July 2026)
- Travel: most country blurbs still say "itinerary coming soon", photos arrays empty (except Colombia has its snorkeling story). Add per-country photos to `assets/photos/travel/` + list them in `js/travel-data.js`.
- Food page: baking photos still placeholders.
- Custom domain: not set up (would cost ~$10-15/yr at a registrar; GitHub hosts it free — Settings → Pages → Custom domain).
- Portrait photos crop to center in the Coolpix landscape screen (object-fit: cover) — acceptable, could letterbox instead.

## For a future AI assistant
Read this file plus README.md first. The owner prefers: concise and direct, no em dashes, honest pushback over agreement, plain talk. Ask before assuming. She can edit on github.com (pencil icon / press `.` for the web editor) or locally via GitHub Desktop; if both, always Pull before local edits.
