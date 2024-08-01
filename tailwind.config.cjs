/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#379683",
        "gray-50": "#5D5C61",
        "blue-20": "#7395AE",
        "blue-50": "#557A95",
        "gray-100": "#B1A296",
        "white-20": "#ffffff"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        monserrat: ["Monserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
