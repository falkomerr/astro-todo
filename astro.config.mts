import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';
import type { ManifestOptions } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  name: 'FalkTodo',
  short_name: 'FalkTodo',
  description: 'A simple todo list with authorization built on effector, astro and react',
  theme_color: '#182449',
  dir: 'ltr',
  display: 'standalone',
  display_override: ['standalone'],
  orientation: 'natural',
  start_url: '/',
  background_color: '#182449',
  lang: 'en',
  categories: ['todo', 'performance'],
  scope: '/',
  icons: [
    {
      src: '/logo/72x72.png',
      sizes: '72x72',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/96x96.png',
      sizes: '96x96',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/120x120.png',
      sizes: '120x120',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/128x128.png',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/144x144.png',
      sizes: '144x144',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/152x152.png',
      sizes: '152x152',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/180x180.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/384x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/logo/512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ],
};


// https://astro.build/config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    AstroPWA({
      manifest,
    }),
  ],
});

