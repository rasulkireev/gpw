
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import InstantSearch from 'vue-instantsearch';
import "tailwindcss/tailwind.css"
// import 'prismjs/themes/prism.css'
require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(InstantSearch)

  const description = "My peronal page to document my life journey."
  const baseUrl = "https://rasulkireev.com/"
  const siteTitle = "Rasul Kireev | Personal Website"

  head.link.push({
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css"
  });

  head.link.push({
    rel: 'me',
    href: 'https://twitter.com/rasulkireev',
  });
  
  head.link.push({
    rel: "stylesheet",
    href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
  });

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  })

  head.link.push({
    rel: "webmention",
    href: "https://webmention.io/rasulkireev.com/webmention"
  });

  head.link.push({
    rel: "pingback",
    href: "https://webmention.io/rasulkireev.com/xmlrpc"
  })

  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  })

  head.meta.push({
    key: "description",
    property: "description",
    content: description
  })

  head.meta.push({
    key: "og-url",
    property: "og:url",
    content: baseUrl
  })

  head.meta.push({
    property: "og:site_name",
    content: siteTitle
  })

  head.meta.push({
    key: "og-title",
    property: "og:title",
    content: siteTitle
  })

  head.meta.push({
    property: "og:type",
    content: "website"
  })

  head.meta.push({
    key: "og-description",
    property: "og:description",
    content: description
  })

  head.meta.push({
    key: "og-image",
    property: "og:image",
    content: "https://avatars.githubusercontent.com/u/8257474"
  })

  head.meta.push({
    name
    : "twitter:site",
    content: baseUrl
  })

  head.meta.push({
    name: "twitter:creator",
    content: "@rasulkireev"
  })

  head.meta.push({
    key: "twitter-card-type",
    name
    : "twitter:card",
    content: "summary"
  })

  head.meta.push({
    key: "twitter-title",
    name
    : "twitter:title",
    content: siteTitle
  })

  head.meta.push({
    key: "twitter-description",
    property: "twitter:description",
    content: description
  })

  head.meta.push({
    key: "twitter-image",
    property: "twitter:image",
    content: "https://avatars.githubusercontent.com/u/8257474"
  })
}
