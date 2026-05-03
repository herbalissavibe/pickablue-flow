# pickablue flow — landing skeleton

Marketing one-pager (German). Stack: **Vite 6**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Radix Dialog**, **Motion** (installed; animations can be added incrementally).

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

## Hero video

- Default **poster**: `public/images/hero-poster.svg`.
- In **development**, if `public/video/hero.*` is missing, the hero falls back to a **deep underwater** clip (Pexels; needs network — see `src/content/de.ts`).
- In **production**, only `/video/hero.*` is used — add your own water/depth footage in `public/video/` or host on CDN.

## Docs

See `docs/` for architecture, palette, and stack rationale.
