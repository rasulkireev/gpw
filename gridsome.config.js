// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');


module.exports = {
    siteName: 'Rasul Kireev',
    siteDescription: 'This my personal Digital Garden. Collection of thoughts, notes and a bunch of other things. Whatever I want in fact.',
    siteUrl: 'https://rasulkireev.com',
    metadata: {
        author: 'Rasul Kireev',
        twitter: '@rasulkireev',
    },

    templates: {
        ResourceNote: [
            {
                path: (node) => {
                    return `/resources/${node.path}`
                }
            }
        ],
    },

    plugins: [
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Post',
                path: 'content/articles/*.md',
                baseDir: './content/articles',
                route: '/:slug',
                template: './src/templates/Post.vue',
                plugins: [
                    '@gridsome/remark-prismjs',
                    ['@noxify/gridsome-plugin-remark-embed', {
                        'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
                    }]
                ],
            },
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'BookNote',
                path: 'content/notes/*.md',
                baseDir: './content/notes',
                route: '/book/:bookSlug',
                template: './src/templates/BookNote.vue',
                plugins: [
                    '@gridsome/remark-prismjs',
                    ['@noxify/gridsome-plugin-remark-embed', {
                        'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
                    }]
                ],
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/resources/**/*.md',
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

        // Plausible
        {
            use: 'gridsome-plugin-plausible'
        },

        // Sitemap
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

        // General RSS
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
                    url: 'https://rasulkireev.com/' + node.path,
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml'
                }
            }
        },
        
        // Django RSS, need to add filter
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                latest: true,
                feedOptions: {
                    title: 'Rasul Kireev',
                    feed_url: 'https://rasulkireev.com/django.xml',
                    site_url: 'https://rasulkireev.com'
                },
                feedItemOptions: node => ({
                    title: node.title,
                    date: node.date,
                    description: node.description,
                    url: 'https://rasulkireev.com/' + node.path,
                }),
                output: {
                    dir: './static',
                    name: 'django.xml'
                }
            }
        },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    tailwind
                ],
            },
        },
    },
    transformers: {
        remark: {
            plugins: [
                '@gridsome/remark-prismjs',
                ['@noxify/gridsome-plugin-remark-embed', {
                    'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
                }]
            ],
        },
        externalLinksRel: [],
    }
}