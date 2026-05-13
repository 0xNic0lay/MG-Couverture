// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://0xNic0lay.github.io',
  base: '/MG-Couverture',
  vite: {
    plugins: [tailwindcss()],
  },
});
