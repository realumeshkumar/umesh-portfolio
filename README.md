# Umesh Kumar: portfolio

A single-page portfolio built with Next.js (App Router), React and TypeScript. Plain CSS, no UI library.

## Run it

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Edit the content

All text, links, skills, jobs, projects and certifications live in `data/site.ts`. Change them there; the components read from that file.

Before going live, set `site.url` in `data/site.ts` to your real domain. It is used for SEO tags, `sitemap.xml` and `robots.txt`.

To replace the resume, overwrite `public/Umesh-Kumar-Resume.pdf`.

Colours and fonts are CSS variables at the top of `app/globals.css`. The site uses a single dark theme.

## Deploy

- **Vercel**: push to GitHub and import the repository. No settings needed.
- **Your own server (Nginx)**: uncomment `output: "export"` in `next.config.ts`, run `npm run build`, and serve the `out/` folder as static files. Or run `npm start` behind an Nginx reverse proxy.

## Structure

```
app/          layout (SEO tags), page, global CSS, sitemap, robots, icon
components/   Header, MigrationPanel (before/after result), Projects (filter), AdobeBadge, Reveal (scroll fade-in)
data/site.ts  all content
public/       resume PDF, images/ (photo, headshot, Adobe badge)
```
