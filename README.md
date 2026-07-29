# devika's personal site

A scrapbook-style personal website. Plain HTML/CSS/JS — no build step, no framework, free to host anywhere.

## Preview it locally
Open `index.html` in any browser. (The travel globe and fonts load from CDNs, so be online.)

## Pages
- `index.html` — collage homepage (click the vinyl to play Open Arms, the phone for socials)
- `about.html` — personal letter + bucket list
- `photography.html` — camera shelf; favorite shots show inside the Coolpix screen
- `projects.html` — the 4 deployed apps + leadership
- `professional.html` — experience summary + resume PDF download
- `travel.html` — draggable globe, 35 dots, hover previews, click for photos
- `food.html` — Beli link + baking gallery

## Adding your photos
1. **Photography:** drop images into `assets/photos/photography/`, then open `photography.html` and list the filenames in the `PHOTOS` array near the bottom.
2. **Travel:** drop images into `assets/photos/travel/`, then open `js/travel-data.js` and add them to each country's `photos` list. Edit each `blurb` to be your mini itinerary — it shows on hover.
3. **Food:** drop images into `assets/photos/food/`, then in `food.html` replace each `<div class="ph">photo coming soon</div>` with `<img src="assets/photos/food/yourphoto.jpg" alt="">`.
4. **About-page polaroids:** drop 4 photos into `assets/photos/about/` named exactly `foster-dog.jpg`, `me.jpg`, `rio.jpg`, and `orca.jpg` — they appear automatically, no code edits needed.

Tip: keep images under ~500KB each (export at ~1600px wide) so pages stay fast.

## Updating your resume
Replace `assets/Devika_Supriya_Mohan_Resume.pdf` with the new file, keeping the same filename.

## Free hosting (GitHub Pages)
1. Create a GitHub repo named `devikasupriyamohan05-sudo.github.io` (using your exact GitHub username).
2. Upload everything in this folder to the repo (drag-and-drop works on github.com).
3. Repo Settings → Pages → confirm it deploys from the `main` branch.
4. Your site is live at `https://devikasupriyamohan05-sudo.github.io` in about a minute.

Any edit = commit the changed file and it redeploys automatically.
