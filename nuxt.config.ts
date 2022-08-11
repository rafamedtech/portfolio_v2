import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  head: {
    title: 'Rafamed',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to my portfolio website' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  modules: ['@nuxt/content'],

  content: {
    highlight: {
      theme: 'dracula',
      preload: ['python', 'javascript', 'css', 'html', 'bash'],
    },
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
