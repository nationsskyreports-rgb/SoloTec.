# Kareem Rashad / SoloTec — Portfolio Site

Static, multi-page, bilingual (EN/AR) portfolio. Deploys anywhere that serves static files. This build is optimized for Cloudflare Pages.

## Pages

```
solotec-site/
├── index.html          # Home — short, animated, with 4 featured projects
├── projects.html       # 4 detailed case studies with #anchors
├── about.html          # Personal story
├── contact.html        # Contact info + form (mailto)
├── _headers            # Cloudflare security & cache headers
├── _redirects          # Clean URLs (/about → /about.html)
├── README.md
├── css/
│   └── main.css        # All styles, tokenized
├── js/
│   └── main.js         # Language toggle + hero banner + mobile sheet
└── assets/
    ├── logo-mark.svg           # Hexagon + gradient S + dot (transparent bg)
    ├── logo-wordmark.svg       # Full lockup with wordmark
    ├── portrait.jpg            # Your photo (CSS-clipped into a hexagon)
    ├── icons/
    │   ├── favicon.png         # 64×64
    │   ├── apple-touch-icon.png # 180×180
    │   └── og-image.png        # 1200×630 for social sharing
    ├── mockups/                # Interim SVG mockups until real screenshots arrive
    │   ├── mockup-whatsapp.svg
    │   ├── mockup-hris.svg
    │   └── mockup-ios.svg
    └── screenshots/            # Real screenshots per project
        ├── whatsapp/
        │   └── login.png
        ├── hris/
        ├── ios/
        │   └── enjy-login.png
        └── ops/
            ├── agent-portal-login.png
            ├── campaign-portal-login.png
            └── admin-panel-login.png
```

## What still needs your input

| Item | Status | Where to update |
|---|---|---|
| Real internal screenshots (dashboards, inbox, features) | Missing | Drop PNGs into `assets/screenshots/{project}/` — no code changes needed if you use the same file names |
| Facebook / Instagram / TikTok links | Not linked | The site doesn't reference these yet — add them if/when you create the pages |
| App Store link | Not shown | Add a link in `projects.html` under the iOS case study when the app is public |

## Deploy on Cloudflare Pages

Cloudflare Pages is free, faster than GitHub Pages, gives you a custom domain with SSL, and supports the `_headers` and `_redirects` files this project includes.

### Method A — Direct upload (easiest, no GitHub needed)

1. Sign in to [dash.cloudflare.com](https://dash.cloudflare.com/).
2. In the sidebar, click **Workers & Pages** → **Create application** → **Pages** → **Upload assets**.
3. Give the project a name: `solotec` (this becomes `solotec.pages.dev`).
4. Drag this whole `solotec-site` folder into the upload zone.
5. Click **Deploy site**. In ~30 seconds it's live at `https://solotec.pages.dev`.

### Method B — Via GitHub (recommended if you'll keep editing)

1. Push this folder to a GitHub repo (`soloever2-maker/solotec` for example).
2. In Cloudflare Pages → **Create application** → **Pages** → **Connect to Git**.
3. Choose the repo. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. **Save and Deploy.** Every future `git push` triggers a new deploy automatically.

### Custom domain (later)

1. Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
2. Add `solotec.dev` (or any domain you own — cheapest at Namecheap or Cloudflare Registrar).
3. Cloudflare handles SSL and the DNS records automatically.

## Local preview (optional)

No build step. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Design decisions worth knowing

- **No sticky nav with backdrop-blur** — that pattern reads as AI-generated. Nav is standard, at the top.
- **Colors:** the base is teal + blue (SoloTec brand). Purple, amber, and coral appear only as project-card accents, one per card, so the page has variety without becoming a rainbow.
- **Animated hero banner** — floating code symbols (`{ }`, `< />`, `=>`, etc.) + glowing particles injected by JS. They loop slowly. `prefers-reduced-motion` disables all animation.
- **Bottom nav (mobile only)** — Home / Projects / About / Contact / Menu. The Menu button opens a slide-up sheet with GitHub, LinkedIn, Email, and the language switch.
- **Floating WhatsApp button** — always visible, pulses gently, links directly to `+20 111 150 9666`.
- **Mockups vs. screenshots** — the SVGs in `assets/mockups/` are interim illustrations for pieces I don't have real screenshots of yet. When you drop real PNGs into `assets/screenshots/{project}/`, just update the `src` in the relevant `<img>` tag.
- **Hexagon portrait** — your photo is clipped with a CSS `clip-path`, not baked into the image. Swap `assets/portrait.jpg` any time and the hexagon updates automatically. `object-position: 60% 30%` is set to focus on the face; adjust if a different photo needs different framing.

## Brand tokens (copy for consistency)

```
Teal:    #00B69B
Blue:    #0EA5E9
Purple:  #A78BFA
Amber:   #F59E0B
Coral:   #FB7185
BG:      #0F1729
Surface: #1A2340
Text:    #E8EDF5
Muted:   #94A3B8
```

## Editing the copy

- The English/Arabic text on every page is either directly in the HTML or in the `i18n` object at the top of `js/main.js`. Elements with `data-i18n="key"` swap based on which language is active.
- For a quick text change: edit the HTML directly (English is the source), then find the matching Arabic key in `js/main.js` and update it too.
- The three case-study bodies (Problem / What I built / Interesting bit) are in `projects.html` in plain HTML — no i18n on those blocks yet. If you need them bilingual, wrap the paragraphs in `<span data-i18n="...">` and add the Arabic to `js/main.js`.
