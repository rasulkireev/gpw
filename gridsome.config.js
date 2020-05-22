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
  siteName: 'Rasul Kireev',
  siteDescription: 'This my personal Digital Garden. Collection of thoughts, notes and a bunch of other things. Whatever I want in fact.',
  siteUrl: 'https://rasulkireev.com',
  metadata: {
    author: 'Rasul Kireev',
    twitter: '@rasulkireev',
  },

  templates: {
    Post: [
      {
        path: (node) => {
          return `/${node.slug}`
        }
      }

    ],
    BookNote: [
      {
        path: (node) => {
          return `/${node.bookSlug}`
        }
      }
    ],
  //   ResourceNote: [
  //     {
  //       path: (node) => {
  //         return `/${node.category}/${node.slug}`
  //       }
  //     }
  //   ],
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/articles/*.md',
        typeName: 'Post',
      },
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/notes/*.md',
        typeName: 'BookNote',
      },
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/journal/**/*.md',
        typeName: 'ResourceNote',
      },
    },


    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/now/*.md',
        typeName: 'Now',
      }
    },

    {
      use: 'gridsome-plugin-plausible'
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

    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,

        feedOptions: {
          title: 'Rasul Kireev',
          feed_url: 'https://rasulkireev.com/rss.xml',
          site_url: 'https://rasulkireev.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          date: node.date,
          description: node.description,
          url: 'https://rasulkireev.com/' + node.slug,
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },

  ],

  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs',
        ['@noxify/gridsome-plugin-remark-embed', {
            'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
          }]
      ],
      css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
      },
      externalLinksRel: [],
    }
  },
}