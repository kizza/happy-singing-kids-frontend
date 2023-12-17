/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      forrest: {
        light: "#d2ed99",
        DEFAULT: "#06b6d4",
        dark: "#07585a",
      },
      grape: {
        DEFAULT: "purple",
      },
      orange: {
        DEFAULT: "#fa8234",
      },
      aqua: {
        DEFAULT: "#0a898d",
      }
    },
    extend: {},
  },
  plugins: [],
}

