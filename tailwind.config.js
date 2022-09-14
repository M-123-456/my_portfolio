/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accentYellow: "#E6E22D",
        blueNormal: "#1D3DB4",
        blueDarker: "#102FA3",
        whiteGray: "#E0E1DF",
        lightLavender: "#E5E9FE",

      }
    },
  },
  plugins: [],
}
