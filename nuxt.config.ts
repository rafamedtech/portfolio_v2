import { defineNuxtConfig } from 'nuxt';

const routes = await queryContent('/blog').find();
let dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(routes.map((el) => `blog/${el.slug}`));
  });
};

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
    routes: [dynamicRoutes],
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
