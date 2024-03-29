module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-teal' : '#BADFDB',
        'brand-light-teal': '#DCEFED',
        'brand-orange': '#FF8A5C',
      },
      fontSize: {
        'xxxs' : '10px',
      },
      fontFamily: {
        'galada': 'Galada',
        'koho': 'KoHo'
      },
      width: {
        41: '10.25rem',
      },
      height: {
        25: '6.125rem',
        34: '8.5rem',
      },
      margin: {
        25: '6.125rem',
      },
      minHeight: {
        12.5:'12.5rem',
      },
      minWidth: {
        41: '10.25rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
