module.exports = {
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
        34: '8.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
