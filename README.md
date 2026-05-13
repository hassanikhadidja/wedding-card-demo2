# Alex & Diane — 22 November 2026

> *One scroll. Two languages. A thousand tiny details.*

This repo is a **digital wedding invitation** that feels like a single, cinematic page—hero video, falling petals, entry animation, RSVP, travel tips, and a soundtrack—while still shipping as a **modern Next.js** app so you get clean deploys and a proper favicon.

---

## The idea in one breath

Almost everything guests see lives in **`public/page1.html`**: HTML, CSS, and vanilla JavaScript woven together on purpose. Next.js does not reinterpret your layout; it **hosts** the page and sends browsers straight to the experience.

Think of it as a **hand-bound invitation inside a shipping box**—the box is Next; the invitation is the HTML file.

---

## Run it locally

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**. You’ll be redirected to **`/page1.html`**—that’s the invitation.

Ship build:

```bash
npm run build
npm start
```

---

## Where things live

| Piece | What it does |
|--------|----------------|
| **`public/page1.html`** | The full invitation: sections, themes, i18n (EN/FR), motion, forms, audio |
| **`public/assests/`** | Media bundle: hero video, entry clip + **cover image**, icons, day-program background, etc. *(Yes, the folder name is `assests`—paths in the HTML match it on purpose.)* |
| **`public/favicon.svg`** | Purple star tab icon |
| **`app/page.tsx`** | Sends `/` → `/page1.html` |
| **`app/layout.tsx`** | Title, description, and favicon metadata for the app shell |

**Design changes:** edit `page1.html` and refresh. **New photos or clips:** drop files into `public/assests/` (or elsewhere under `public/`) and update the matching `src` / `<source>` attributes.

---

## Stack (honest version)

- **Next.js** — routing, production server, metadata.
- **No React rewrite of the invitation** — the invite is intentionally a self-contained document.
- **Tailwind / Geist** — still wired through the app shell for anything you add under `app/` later; the invite does not depend on them.

---

## Deploy notes

Works on any host that runs Node for Next ([Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), your own VPS). **Videos are heavy**; check your platform’s asset size limits and consider compressing long clips before you upload.

---

## Small credits line

Built as a love letter to the details—fonts, timing, bilingual copy, and the moment someone taps the entry cover to begin.

**22 November 2026** · Alex & Diane
