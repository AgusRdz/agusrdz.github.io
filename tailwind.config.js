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
      'red-intense': '#e25555',
      'space-cadet': '#1d3461',
      'yale-blue': '#2f487e',
      'queen-blue': '#376996',
      'united-nations-blue': '#6290c8',
      'cerulean-frost': '#829cbc'
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
}
