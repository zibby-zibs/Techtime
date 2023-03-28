/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  
  ],
  theme: {
    extend: {
      colors: {
        'cobalt': {
          '50': '#ebf8ff',
          '100': '#d1f1ff',
          '200': '#aee7ff',
          '300': '#76daff',
          '400': '#35c4ff',
          '500': '#079fff',
          '600': '#007aff',
          '700': '#0061ff',
          '800': '#0050d7',
          '900': '#004db3',
        },
        'silver-c': {
          '50': '#f8f8f8',
          '100': '#f0f0f0',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#a1a1a1',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
      },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}
