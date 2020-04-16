<template>
  <Layout>

    <div class="mx-auto mb-10 text-xl">
      <div>
        <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
        <p class="mb-4 text-xl">
          Currently learning to build web apps, create beautiful visualizations and analyze large datasets. In constant beta mode. Trying to write about my learnings more often.
          <g-link to="/about" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">Read More</g-link>
        </p>
        <p class="mb-4 text-xl">
          Also, check out a
          <g-link to="/favourites" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">
          list of my favourite things.
          </g-link>
        </p>
      </div>

      <div class="mb-4">
        <a rel="me" href="https://twitter.com/rasulkireev"><i class="text-3xl lab la-twitter"></i></a>
        <a rel="me" href="https://github.com/rasulkireev"><i class="text-3xl lab la-github"></i></a>
        <a rel="me" href="https://www.linkedin.com/in/rasul-kireev/"><i class="text-3xl lab la-linkedin-in"></i></a>
        <a rel="me" href="https://keybase.io/rasulkireev"><i class="text-3xl lab la-keybase"></i></a>
        <a rel="me" class="u-email" href="mailto:me@rasulkireev.com"><i class="text-3xl las la-at"></i></a>
      </div>

      <fullWidthNewsletter />

    </div>

    <div class="flex flex-row justify-between">
        <section id="blog-posts">
            <div class="flex items-center mb-4">
                <h1 class="pl-1 text-xl font-semibold sm:text-2xl">Recent Writings</h1>
                <g-link to="/blog/" class="inline-block p-1 px-2 ml-4 text-sm font-light text-gray-800 bg-gray-200 rounded center">See All</g-link>
                <a class="inline-block p-1 px-2 ml-4 text-sm font-light text-gray-800 bg-gray-200 rounded center" href="https://fd3.netlify.com">Stats</a>
            </div>
            <div v-for="post in $page.posts.edges" :key="post.id">
                <g-link :to="post.node.slug" class="flex flex-row items-center block p-1 mb-1 text-xl text-gray-600 rounded hover:text-gray-900 hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="post.node.icon" class="inline w-8 h-8 p-1 mr-4 align-middle" />
                    <p class="text-sm md:text-lg">{{ post.node.title }}</p>
                </g-link>
            </div>
        </section>
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (limit: 5, sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        icon
        date (format: "MMMM D, Y")
        timeToRead
        slug
      }
    }
  }
}
</page-query>


<script>
import fullWidthNewsletter from "../components/fullWidthNewsletter"

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    fullWidthNewsletter
  },
}

</script>