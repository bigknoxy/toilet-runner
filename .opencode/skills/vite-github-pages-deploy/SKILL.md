---
name: vite-github-pages-deploy
description: Deploy Vite + Bun project to GitHub Pages
license: MIT
metadata:
  version: 1.0.0
  category: deployment
  related: static-hosting
---

## What I do

Configure Vite and set up GitHub Pages deployment for Bun + Vite projects.

### vite.config.ts configuration:
```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  // CRITICAL for GitHub Pages: base path
  base: './',

  build: {
    target: 'es2015',
    minify: 'terser',
    outDir: 'dist'
  }
});
```

### package.json scripts:
```json
{
  "name": "toilet-runner",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Build process:
```bash
# Using Bun
bun run build

# Output: dist/ folder
# └── index.html
# └── assets/
#     └── index-[hash].js
#     └── index-[hash].css
```

### Deployment options:

#### Option 1: gh-pages package
```bash
bun add -d gh-pages

# Add to package.json
"deploy": "gh-pages -d dist"

# Deploy
bun run deploy
```

#### Option 2: GitHub Actions (recommended)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## When to use me

**Use proactively when:** Deploying Toilet Runner to GitHub Pages or any static host.

I should be invoked for:
- Setting up Vite build configuration
- Configuring GitHub Pages deployment
- Any Vite + Bun project that needs static hosting
- Setting up automated deployment with GitHub Actions

## Notes

- Base: './' fixes broken asset paths on GitHub Pages
- All assets loaded relative to built static path
- No server-side logic needed
- Works with Netlify, Vercel, Surge, etc.
