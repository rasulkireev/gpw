// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function (api) {

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(({ addSchemaTypes, schema }) => {
    addSchemaTypes(`
        type Post implements Node @infer {
            wordCount: Int
        }
    `)
  })

  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
        Post: {
            wordCount: (obj, args, context, info) => {
                return obj.content.split(' ').length;
            }
        }
    })
  })

  api.loadSource(({ addSchemaTypes, schema }) => {
    addSchemaTypes(`
        type BookNote implements Node @infer {
            wordCount: Int
        }
    `)
  })

  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
        BookNote: {
            wordCount: (obj, args, context, info) => {
                return obj.content.split(' ').length;
            }
        }
    })
  })

}
