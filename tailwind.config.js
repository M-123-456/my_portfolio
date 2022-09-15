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
        accentYellow: "#E6E22D",
        standardBlue: "#1D3DB4",
        darkBlue: "#102FA3",
        whiteGray: "#E0E1DF",
        lightLavender: "#E5E9FE",

      },
      backgroundImage: {
        "wave": "url('/wave.png')",
      },
    },
  },
}
