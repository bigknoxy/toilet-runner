import { defineConfig } from 'vite';

export default defineConfig({
  // CRITICAL for GitHub Pages: base path
  base: './',

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },

  build: {
    target: 'es2015',
    minify: 'esbuild',
    outDir: 'dist'
  }
});
