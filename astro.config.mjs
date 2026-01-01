// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://gtbm.com.np',
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en", "ne"],
        routing: {
            prefixDefaultLocale: true,

        }
    }
});
