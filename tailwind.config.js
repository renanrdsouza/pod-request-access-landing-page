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
      },
      maxWidth: {
        'spotify-logo': '3.5rem',
        'apple-logo': '2.813rem',
        'google-logo': '4.563rem',
        'pocket-logo': '4.813rem'
      },
      maxHeight: {
        'spotify-apple-logo': '1.063rem',
        'google-logo': '0.688rem',
        'pocket-logo': '0.938rem'
      }
    },
  },
  plugins: [],
}

