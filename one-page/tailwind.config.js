/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './vueform.config.js',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'pixel': ['DePixelKlein', 'serif'],
      'display': ['ClashDisplay', 'serif'],
  },
  backgroundImage: {
    'image': "url('./src/assets/bg.png')",
  },
  },

  plugins: [],
}

