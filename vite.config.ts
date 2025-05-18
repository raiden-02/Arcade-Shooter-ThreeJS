// vite.config.ts
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  // Base public path for assets; using a relative path ensures builds work under any subdirectory (e.g., GitHub Pages)
  base: './',
  plugins: [wasm()],
  // Include .glb files as static assets so new URL imports are processed
  assetsInclude: ['**/*.glb'],
  build: {
    target: 'esnext',
  },
});
