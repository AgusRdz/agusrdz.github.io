const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        gray: '0 20px 15px -12px rgba(237, 242, 247, 0.4)',
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
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
}
