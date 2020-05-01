module.exports = {
  theme: {
    extend: {
      inset: {
        '0': 0,
        '1/3': '33%',
        auto: 'auto',
      },
      colors: {
        background: {
          primary: 'var(--bg-background-primary)',
       
          form: 'var(--bg-background-form)',
        },

        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-hover)',
          link: 'var(--text-copy-link)',
        },

        'border-color': {
          primary: 'var(--border-border-color-primary)',
        },

        transparent: 'transparent',
      },
    },
  },
  variants: {},
  plugins: [],
}
