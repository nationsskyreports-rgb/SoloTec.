# Kareem Rashad — Personal site

Static portfolio, bilingual EN/AR, deploys anywhere that serves static files.

## Files

```
solotec-site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo-mark.svg          ← main hexagon logo (transparent bg)
    ├── logo-wordmark.svg      ← hexagon + "SoloTec" wordmark
    ├── portrait-placeholder.svg  ← temporary silhouette until real photo
    ├── mockups/
    │   ├── mockup-whatsapp.svg   ← Case 1 preview
    │   ├── mockup-hris.svg       ← Case 2 preview
    │   └── mockup-ios.svg        ← Case 3 preview
    └── icons/
        ├── favicon.png            (64×64)
        ├── apple-touch-icon.png   (180×180)
        └── og-image.png           (1200×630, social preview card)
```

## What's real, what's placeholder

| Element | Status |
|---|---|
| Name, role, location | ✅ from you |
| Phone / email / LinkedIn / GitHub links | ✅ from you |
| Case study text (WhatsApp / HRIS / iOS) | ✅ from your real projects |
| Screenshot mockups | ⚠️ illustrative — replace with real screenshots when you have them |
| Portrait | ⚠️ silhouette — replace `assets/portrait-placeholder.svg` with your photo |
| Facebook / Instagram / TikTok links | ⚠️ set to `#` — update in `index.html` after creating the pages |
| App Store link | ⚠️ not linked yet — add it inline in Case 3 when the app is public |

## What still to do before publishing

1. **Portrait.** Replace `assets/portrait-placeholder.svg` with a real headshot (cropped hexagonal or square, ~600×600px works). Or crop your photo into a hexagon using [hexagon-crop.com](https://hexagon-crop.com) and export as PNG.
2. **Social links.** In `index.html`, find the `.socials` section and swap the three `href="#"` for your real Facebook, Instagram, TikTok URLs after you create the pages.
3. **Real screenshots.** When you're ready, drop real screenshots into `assets/mockups/` (same names, PNG or JPG) — no code change needed.

## Deploy on GitHub Pages

1. Create a repo on your GitHub (`soloever2-maker`) called `solotec` or `kareem`.
2. Upload the whole folder as-is.
3. Settings → Pages → Branch: `main` → Save.
4. Live in a minute at `https://soloever2-maker.github.io/REPO-NAME/`.

## Local preview

No build step.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Design decisions

- **No sticky nav with backdrop-blur.** Nav sits at the top and stays there. This is a defining "AI-generated portfolio" pattern; removing it makes the page feel less templated.
- **No scroll-reveal animations.** Content appears when it appears. This is another AI-generated tell.
- **Gradient used once.** The teal→blue gradient shows up only in the "c" of the wordmark and one bottom strip in the OG image. That's it. Everything else is monochrome text on the dark background.
- **Asymmetric case studies.** The three cases alternate sides (image left, image right, image left) instead of a symmetric grid.
- **Real numbers.** The stats band uses actual project numbers (26 tables, 6 platforms, 1 App Store app) rather than generic "10+ years experience" filler.
- **Personal voice.** Copy uses first person ("I built", "my day job") and specific projects by name, not corporate "we deliver" language.

## Regenerating icons

If you change the brand colors or the logo shape, run `python build_icons.py` (in the parent dir where this project was built) to re-generate `favicon.png`, `apple-touch-icon.png`, and `og-image.png` in one shot.

## Brand tokens

```
Teal:      #00B69B
Blue:      #0EA5E9
BG:        #0D1526
Surface:   #17203A
Text:      #E8EDF5
Muted:     #8B95A8
Dim:       #5A6685
```

Gradient direction: **vertical** (`180deg`), teal at top, blue at bottom.

## Fonts

- Space Grotesk (display, headings, big numbers)
- Inter (body copy, UI)
- JetBrains Mono (eyebrows, tech labels, small caps)
- IBM Plex Sans Arabic (Arabic mode)

Loaded from Google Fonts. No self-hosted files needed.
