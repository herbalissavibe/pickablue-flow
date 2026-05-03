# Video assets

Place production files here. In **development**, if these files are missing, the app falls back to an **underwater / depth** stock clip (Pexels) so the hero and case modals still show water — replace with your own assets for production (`npm run build` uses only local paths).

| File | Usage |
|------|--------|
| `hero.webm` / `hero.mp4` | Full-bleed hero background |
| `case-kuladig.*` | Modal #1 |
| `case-regional.*` | Modal #2 |
| `case-datacycle.*` | Modal #3 |

In **production** builds, only these paths are used — add real files before deploy or the hero/cases may not play.
