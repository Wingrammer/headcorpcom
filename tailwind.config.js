/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**.html"
  ],
  theme: {
    colors:{
      blueHead:'#1B91BF',
      goldHead:'#BFA65A',
      orangeHead:'#F2A71B',
      black:'#000000',
      white:'#fff',
      blacka:'#262626',
      transparent:'transparent'
    },
    fontFamily: {
     roboto: 'Roboto'
    },
    extend: {},
    backdropBlur: {
      flou: '20px',
    }
  },
  plugins: [],
}
