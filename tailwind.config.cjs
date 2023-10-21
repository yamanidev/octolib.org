/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        beige: '#FAEBD9',
        'blue-light': '#2B9AAE',
        'blue-dark': '#1B5F6A',
        sand: '#D4A040'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        navbar: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        curriculum: '-5px 4px 10px 0px #00000040'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};
