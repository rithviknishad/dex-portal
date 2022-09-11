/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto",
        serif: "Roboto Serif",
        mono: "Roboto Mono",
      },
      colors: {
        background: "#000",
      },
    },
  },
  plugins: [],
};
