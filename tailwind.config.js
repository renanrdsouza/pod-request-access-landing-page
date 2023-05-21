/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        'black': '#121725',
        'dark-blue': '#2C344B',
        'light-green': '#54E6AF',
        'light-gray': '#C2CBE5',
        'gray': '#5A668A'
      },
      fontFamily: {
        'chivo': ['Chivo', "sans-serif"]
      },
      fontSize: {
        '5.5xl': '3.25rem'
      },
      lineHeight: {
        'title-line-height': '3.875rem'
      }
    },
  },
  plugins: [],
}

