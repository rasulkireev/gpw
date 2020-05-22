module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
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
  plugins: [],
}
