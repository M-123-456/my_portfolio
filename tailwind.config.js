/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'hover:bg-standardBlue',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        mainYellow: "#fdeb00",
        raisinBlack: "#291F1E",
        lightGray: "#d8d8d8",
        chinaRose: "#A8577E",
        lavenderFloral: "#AA7DCE"
      },
    },
  },
}
