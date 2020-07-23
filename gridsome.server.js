// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

const API_ORIGIN = "https://webmention.io/api/mentions.jf2";
const { GRIDSOME_WEBMENTIONS_TOKEN } = process.env;


module.exports = function (api) {

  api.loadSource(async store => {
    const { data } = await axios.get(API_ORIGIN, {
      params: { token: GRIDSOME_WEBMENTIONS_TOKEN }
    });

    const mentions = store.addCollection("mentions");

    for (const item of data.children) {
      mentions.addNode(item);
    }
  })

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
}
