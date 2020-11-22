const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '0': 0,
        '1/3': '33%',
        auto: 'auto',
      },
      width: {
        '30p': '30%',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}