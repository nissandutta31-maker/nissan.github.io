# nissan.github.io

My personal site. One page, no build step, no dependencies.

**Live:** https://nissandutta31-maker.github.io/nissan.github.io/

## Updating it

Everything on the page comes from [`content.js`](content.js). That's the only file
to edit.

- **Add a project** — copy a `{ ... }` block inside `work`, change `year`, `title`
  and `note`. Add a `href` if it links somewhere; leave it `""` if not.
- **Remove something** — delete its block. If a list ends up empty, its whole
  section disappears from the page. No empty headings left behind.
- **Change the photo** — drop a square image at `assets/portrait.jpg`. Until one is
  there, the page shows initials in a circle instead.
- **Every month** — bump `lastUpdated`, which shows in the footer.

Commit, push, and GitHub Pages picks it up in a minute or so.

## Previewing before you push

Open `index.html` in a browser. That's it — it works straight off the filesystem.

## Files

| File | What it is |
| --- | --- |
| `content.js` | All the text. The file you edit. |
| `index.html` | Page structure and the small script that renders `content.js`. |
| `styles.css` | All styling, including dark mode and a print layout. |
| `assets/` | Images. `portrait.jpg` goes here. |
