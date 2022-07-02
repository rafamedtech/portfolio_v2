import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  modules: ['@nuxt/content'],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  // generate dynamic routes nuxt 3 content v2
  generate: {
    routes: ['blog', 'blog/:slug'],
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
