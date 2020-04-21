// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))


module.exports = {
  siteName: 'Rasul Kireev | Personal Website',
  siteDescription: 'This is all about me.',
  siteUrl: 'https://rasulkireev.com/',
  metadata: {
    author: 'Rasul Kireev'
    ,
    twitter: '@rasulkireev',
  },

  templates: {
    Post: '/:slug',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*.md',
        typeName: 'Post',
      },
      remark: {
        plugins: [
          '@gridsome/remark-prismjs',
          [
            '@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
            }
          ]
        ]
      }
    },
    
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/now/*.md',
        typeName: 'Now',
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-143847424-1'
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
        }
      }
    },

  ],

  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },
}