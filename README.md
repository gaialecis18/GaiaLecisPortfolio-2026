# Gaia Lecis Portfolio

Personal portfolio built with React. The website has been created with the help of some AI tools such as Claude, Codex and Copilot. Still, the whole code has been reviewed, fixed and enhanced manually.

## Project Structure

```text
public/
  assets/
    profile/              Profile imagery
    projects/             Project thumbnails and cover images
  _redirects              Static-host fallback for client-side routes
  index.html              HTML shell and metadata
  manifest.json           PWA metadata

src/
  app/                    Router and application shell
  components/
    layout/               Header, footer, scroll behavior
    projects/             Project-specific reusable components
  data/                   Portfolio content and project metadata
  pages/                  Route-level pages
  styles/                 Global and app-level styles
  index.js                React entry point
```

## Development

```bash
npm install
npm start
```

## Production Build

```bash
npm run build
```

The optimized static site is generated in `build/`.

## Deployment Notes

- Netlify-style SPA fallback is handled by `public/_redirects`.
- Vercel SPA fallback is handled by `vercel.json`.
- Project images should be added under `public/assets/projects/<project-slug>/`.
- Profile images should be added under `public/assets/profile/`.
