// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // import main style file
  css: ['~/assets/scss/main.scss'],

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Bellefair: {
          wght: 400,
        },
        'Barlow Condensed': {
          wght: 400,
        },
        Barlow: {
          wght: 400,
        },
      },
    }]
  ],
})
