/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      accent: {
        1: "#FAFAFA",
        2: "#EAEAEA",
        3: "#999",
        4: "#888",
        5: "#666",
        6: "#444",
        7: "#333",
        8: "#111",
      },
      error: {
        lighter: "#F7D4D6",
        light: "#FF1A1A",
        DEFAULT: "#E00",
        dark: "#C50000",
      },
      success: {
        lighter: "#D3E5FF",
        light: "#3291FF",
        DEFAULT: "#0070F3",
        dark: "#0761D1",
      },
      warning: {
        lighter: "#FFEFCF",
        light: "#F7B955",
        DEFAULT: "#F5A623",
        dark: "#AB570A",
      },
      violet: {
        lighter: "#D8CCF1",
        light: "#8A63D2",
        DEFAULT: "#7928CA",
        dark: "#4C2889",
      },
      cyan: {
        lighter: "#AAFFEC",
        light: "#79FFE1",
        DEFAULT: "#50E3C2",
        dark: "#29BC9B",
      },
      highlight: {
        purple: "",
        magenta: "",
        pink: "",
        yellow: "",
      },
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        serif: "Roboto Serif",
        mono: "Roboto Mono",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
