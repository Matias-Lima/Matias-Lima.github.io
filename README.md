# matias-lima.github.io

Personal portfolio — a single page (Hero → Skills → Studies → Projects → About → Contact)
plus two explorer pages, `projects.html` and `studies.html`. Static HTML/CSS/JS, no build step.

## Editing content

Almost everything you will want to change lives in **`js/data.js`**:

- `PROJECTS` and `STUDIES` — one object per card. The first item is `01`, the second `02`, and so on.
- `featured: true` puts an item in the home-page carousel; every item appears on the explorer pages.
- `image` is optional. Without it, `art` draws a generated visual
  (`chart`, `candles`, `network`, `pipeline`, `waves`, `skyline`, `code`, `pages`, `rings`, `chat`).
- `PROJECT_FILTERS` / `STUDY_FILTERS` define the filter pills (`cat` on an item must match a `key`).

Text for the Hero, Skills, About timeline and Contact is directly in `index.html`.

## Images

- The Hero portrait is two files made from one transparent PNG (`images/hero-portrait.png`):
  `images/hero-portrait.jpg` (the picture on black) and `images/hero-mask.png` (its alpha
  channel, same pixel size). The CSS uses the mask to cut the subject out, so the face sits in
  front of the background geometry. To swap the portrait, replace the PNG and regenerate both
  files at the same size.
- `images/hero-bg.jpg` is the Hero background (textured black with the gold geometry on the right).
- Card thumbnails of your own screenshots live in `assets/thumbs/` (max 900 px wide, JPEG). The full-size
  originals, the old pages and the background videos were removed from the repo in October 2026 — they are
  still in the git history (`git show ef548b9:<path>`), the last commit of the previous site.
- Stock photos for the more abstract cards live in `assets/photos/` (1200 px wide). They come from Unsplash
  under the Unsplash License; `assets/photos/CREDITS.md` lists the photographer and source of each one.
- The About section's photos live in `images/about/`.

## Structure

```
index.html        single page
projects.html     project explorer (search, sort, filters)
studies.html      studies explorer
blog.html         list of posts (POSTS in js/data.js; each post is its own page, e.g. Paginas_projects/)
css/style.css     design system: black / charcoal, off-white, bronze accent, liquid-glass details
js/data.js        content
js/main.js        navigation, reveal animations, coverflow carousel, explorer grids, timeline
```

Published with GitHub Pages from the `main` branch.
