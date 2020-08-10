module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
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
