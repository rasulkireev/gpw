// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/css/tailwind.css')
import 'prismjs/themes/prism.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: "stylesheet",
    href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
  })

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  })

  head.link.push({
    rel: "webmention",
    href: "https://webmention.io/username/webmention"
  })

  head.link.push({
    rel: "pingback",
    href: "https://webmention.io/username/xmlrpc"
  })

}

