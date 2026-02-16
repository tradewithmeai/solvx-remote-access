import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*.png'],
      manifest: {
        name: 'RustDesk Remote Desktop',
        short_name: 'RustDesk',
        description: 'Open-source remote desktop client for Chromebook',
        theme_color: '#0071ff',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
  resolve: {
    alias: {
      // libsodium-wrappers ESM is broken (imports ./libsodium.mjs from wrong directory).
      // Force the CJS build which works correctly with Vite's CJS interop.
      'libsodium-wrappers': resolve(
        __dirname,
        'node_modules/libsodium-wrappers/dist/modules/libsodium-wrappers.js'
      ),
    },
  },
  build: {
    target: 'es2020',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('libsodium')) return 'crypto';
          if (id.includes('protobufjs') || id.includes('node_modules/long')) return 'protobuf';
          if (id.includes('generated/proto')) return 'proto-gen';
        },
      },
    },
  },
  optimizeDeps: {
    include: ['libsodium-wrappers'],
  },
});
