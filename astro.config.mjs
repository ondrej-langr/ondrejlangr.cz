import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from '@astrojs/image';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    astroI18next(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
});
