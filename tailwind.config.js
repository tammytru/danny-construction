/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#f3f4f6',
        'grey': {
          1: '#f3f4f6',
          2: '#f3f4f6',
          3: '#e9e9e9'
        },
        'light-blue': '#3e8de3'
      },
      fontSize: {
        'xs': '1em',
        'sm': '2em',
        'md': '3em',
        'lg': '4em',
        'xl': '5em' 
      }
    },
  },
  plugins: [],
}