// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],

  sitemap: {
    hostname: 'https://rafamed.dev',
  },

  content: {
    highlight: {
      theme: 'dracula',
      preload: ['python', 'javascript', 'css', 'html', 'bash', 'vue'],
    },
  },

  // nitro: {
  //   prerender: {
  //     routes: ['/sitemap.xml'],
  //   },
  // },
});
