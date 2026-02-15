import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  // CRITICAL for GitHub Pages: base path
  base: './',

  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },

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
