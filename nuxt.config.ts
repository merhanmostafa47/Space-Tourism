// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/css/styles.css',
  ],

  postcss: {
    plugins: {
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
      'postcss-custom-selectors': {},
      'postcss-mixins': {},
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Bellefair: {
          wght: [400, 500, 700],
        },
        'Barlow Condensed': {
          wght: [400, 500, 700],
        },
        Barlow: {
          wght: [400, 500, 700],
        },
      },
    }]
  ],
})
