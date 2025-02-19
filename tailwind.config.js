/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        scondary: '#00f6ff',
        lightWhite: 'rgba(255, 255, 255, 0.7)',
        lighBlue: 'rgba(9, 151, 124, 0.1)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}