// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { GRIDSOME_WEBMENTIONS_TOKEN } = process.env;

module.exports = {
    siteName: 'Rasul Kireev',
    siteDescription: 'This my personal Digital Garden. Collection of thoughts, notes and a bunch of other things. Whatever I want in fact.',
    siteUrl: 'https://rasulkireev.com',
    metadata: {
        author: 'Rasul Kireev',
        twitter: '@rasulkireev',
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
                    ['gridsome-plugin-remark-shiki', { skipInline: true, theme: 'min-dark' }],
                    ['@noxify/gridsome-plugin-remark-embed', {
                        'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
                    }]
                ],
            },
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Tutorial',
                path: 'content/tutorials/*.md',
                baseDir: './content/tutorials',
                route: '/:slug',
                template: './src/templates/Tutorial.vue',
                plugins: [
                    ['gridsome-plugin-remark-shiki', { skipInline: true, theme: 'min-dark' }],
                    ['@noxify/gridsome-plugin-remark-embed', {
                        'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
                    }],
                    ['gridsome-plugin-remark-prismjs-all'],
                    // ['@gridsome/remark-prismjs']
                ],
            },
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'BookNote',
                path: 'content/books/*.md',
                baseDir: './content/books',
                route: '/:bookSlug',
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
                path: 'content/now/*.md',
                typeName: 'Now',
            }
        },

        // Tailwind
        {
            use: "gridsome-plugin-tailwindcss",
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
        // General RSS for all content
        {
            use: '@microflash/gridsome-plugin-feed',
            options: {
                contentTypes: ['Post', 'Tutorial', 'BookNote'],
                feedOptions: {
                    title: 'Rasul Kireev',
                    description: "Posts from Rasul's blog.",
                    feed_url: 'https://rasulkireev.com/rss.xml',
                    site_url: 'https://rasulkireev.com'
                },
                rss: {
                    enabled: true,
                    output: '/rss.xml'
                },
                filterNodes: (node) => (
                    node.published == true
                ),
                nodeToFeedItem: (node) => ({
                    title: node.title,
                    date: node.dateUpdated,
                    description: node.description,
                    link: 'https://rasulkireev.com/' + node.path,
                })
            }
        },
        // RSS for Django Tutorials only
        {
            use: '@microflash/gridsome-plugin-feed',
            options: {
                contentTypes: ['Tutorial'],
                feedOptions: {
                    title: 'Rasul Kireev',
                    description: 'Django posts from my blog.',
                    feed_url: 'https://rasulkireev.com/django-rss.xml',
                    site_url: 'https://rasulkireev.com'
                },
                rss: {
                    enabled: true,
                    output: '/django-rss.xml'
                },
                filterNodes: (node) => (
                    node.category == "Django" && node.published == true
                ),
                nodeToFeedItem: (node) => ({
                    title: node.title,
                    date: node.dateUpdated,
                    description: node.description,
                    link: 'https://rasulkireev.com/' + node.path,
                })
            }
        },
        {
            use: '@zefman/gridsome-source-webmention',
            options: {
              domain: 'rasulkireev.com', // Your webmention domain
              token: GRIDSOME_WEBMENTIONS_TOKEN, // Your secret webmention token
            },
        }
    ],
}