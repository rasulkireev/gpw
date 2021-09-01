const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      'node_modules/vue-tailwind/dist/*.js',
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
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false
          }
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}