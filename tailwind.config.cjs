/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        beige: "rgb(var(--color-beige) / <alpha-value>)",
        "blue-light": "rgb(var(--color-blue-light) / <alpha-value>)",
        "blue-dark": "rgb(var(--color-blue-dark) / <alpha-value>)",
        "aero-blue": "#C9F1ED",
        sand: "#D4A040",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        navbar: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
        curriculum: "-5px 4px 10px 0px #00000040",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
