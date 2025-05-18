// vite.config.ts
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  // Base public path when served from GitHub Pages under /Arcade-Shooter-ThreeJS/
  base: '/Arcade-Shooter-ThreeJS/',
  plugins: [wasm()],
  build: {
    target: 'esnext',
  },
});
