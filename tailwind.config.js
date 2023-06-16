/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'tablet': "url('../assets/tablet/image-host.jpg')"
      },
      colors: {
        'black': '#121725',
        'dark-blue': '#2C344B',
        'light-green': '#54E6AF',
        'light-green-hover': '#B3FFE2',
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
        'sm-spotify-logo': '3.5rem',
        'sm-apple-logo': '2.813rem',
        'sm-google-logo': '4.563rem',
        'sm-pocket-logo': '4.813rem',
        'sm-main-container': '39.688rem',
        'md-spotify-logo': '6rem',
        'md-apple-logo': '4.875rem',
        'md-google-logo': '7.813rem',
        'md-pocket-logo': '8.063rem',
        'md-main-container': '39.688rem',
        'md-submit-button': '10.125rem',
        'buttons-container': '26.688rem',
        'max-width-desktop': '90rem'
      },
      maxHeight: {
        'sm-spotify-apple-logo': '1.063rem',
        'sm-google-logo': '0.688rem',
        'sm-pocket-logo': '0.938rem',
        'md-spotify-apple-logo': '1.813rem',
        'md-google-logo': '1.125rem',
        'md-pocket-logo': '1.625rem'
      },
      translate: {
        '17': '4.25rem',
        '50': '11.563rem'
      },
      screens: {
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
