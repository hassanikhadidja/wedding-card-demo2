# Alex & Diane · 22 November 2026

A digital wedding invitation delivered with **Next.js**—because love deserves a fast first paint.

```
     ♥
   Save the date
```

## What this is

The heart of the site lives in **`public/page1.html`**: one handcrafted page with its own typography, motion, and bilingual touches. Next.js wraps it lightly—visit the root URL and you’re whisked straight to the invitation, no compromise on design.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)—you’ll land on the invitation (`/page1.html`).

Production:

```bash
npm run build
npm start
```

## Inside the box

| Path | Role |
|------|------|
| `public/page1.html` | The invitation—layout, styles, and interactions |
| `public/assests/` | **Background video**, **entry animation**, and **icons** (paths in HTML match this folder name) |
| `app/page.tsx` | Redirects `/` → `/page1.html` |
| `app/layout.tsx` | Site metadata (title & description) |

> **Tip:** To refresh copy, colors, or sections, edit `public/page1.html` directly. Replace media in `public/assests/` and keep filenames aligned with the `<video>` / `<img>` / `<source>` tags.

## Deploying

Works anywhere Next.js runs ([Vercel](https://vercel.com), [Netlify](https://netlify.com), your own Node host). Large video files count toward static asset limits—compress clips if your host has caps.

---

*Made with care. RSVP in the page.*
