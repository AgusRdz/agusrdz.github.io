const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        gray: '0 20px 15px -12px rgba(237, 242, 247, 0.2)',
        black: '0 20px 15px -12px rgba(0, 0, 0, 0.5)'
      },
      height: {
        fit: 'fit-content'
      }
    },
    colors: {
      black: colors.black,
      gray: colors.gray,
      'true-gray': colors.trueGray,
      white: colors.white,
      blue: colors.blue,
      'red-intense': '#e25555'
    }
    // container: {
    //   center: true
    // },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },
    // colors: {
    //   gray: colors.coolGray,
    //   blue: colors.lightBlue,
    //   red: colors.rose,
    //   pink: colors.fuchsia
    // },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
}
