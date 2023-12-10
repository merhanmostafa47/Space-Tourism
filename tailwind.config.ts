/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': 'Bellefair,sans-serif',
        'barlow-condensed': '"Barlow Condensed",sans-serif',
        'barlow': 'barlow,sans-serif',
      },
    },
  },
  plugins: [],
};
