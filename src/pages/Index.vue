<template>
  <Layout>
    <div class="mx-auto mb-10 text-xl">
      <div>
        <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
        <p class="mb-4 text-xl">
          Currently learning to build web apps, create beautiful visualizations and analyze large datasets. In constant beta mode. Trying to write about my learnings more often.
          <g-link to="/about/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">Read More</g-link>
        </p>
        <p class="mb-4 text-xl">
          Also, check out a
          <g-link to="/favourites/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">
          list of my favourite things.
          </g-link>
        </p>
      </div>

      <div class="mb-4">
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://twitter.com/rasulkireev"><i class="text-3xl lab la-twitter"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://github.com/rasulkireev"><i class="text-3xl lab la-github"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://www.linkedin.com/in/rasul-kireev/"><i class="text-3xl lab la-linkedin-in"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://keybase.io/rasulkireev"><i class="text-3xl lab la-keybase"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon u-email" rel="me" href="mailto:me@rasulkireev.com"><i class="text-3xl las la-at"></i></a>
      </div>

    <fullWidthNewsletter
    description="Finally, consider signing up for my personal newsletter. I will share the most interesting articles and resources I've encountered during the week.">
    </fullWidthNewsletter>

    </div>

    <div class="flex flex-row justify-between">
        <section>
            <div class="flex items-center mb-4">
                <h1 class="pl-1 text-xl font-semibold sm:text-2xl">Recent Posts</h1>
                <g-link to="/articles/" class="inline-block p-1 px-2 ml-4 text-sm font-light text-gray-800 bg-gray-200 border-0 rounded center">See All</g-link>
                <!-- <a class="inline-block p-1 px-2 ml-4 text-sm font-light text-gray-800 bg-gray-200 border-0 rounded center" href="https://fd3.netlify.com">Stats</a> -->
            </div>
            <div v-for="post in $page.posts.edges" :key="post.id">
                <g-link :to="post.node.slug" class="flex flex-row items-center p-1 mb-1 text-xl border-0 rounded hover:text-gray-900 hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="post.node.icon" class="inline w-8 h-8 p-1 mr-4 align-middle" itemprop="image" />
                    <p class="text-sm font-normal md:text-lg" itemprop="headline">{{ post.node.title }}</p>
                    <div id="blog-post-info" class="hidden">
                      <time class="dt-published" itemprop="datePublished" :datetime="post.node.date">{{post.node.date}}</time>
                      <span itemprop="author">Rasul Kireev</span>
                      <a href="https://rasulkireev.com" itemprop="publisher">https://rasulkireev.com</a>
                    </div> 
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
        slug
      }
    }
  }
}
</page-query>


<script>
import fullWidthNewsletter from "../components/fullWidthNewsletter"

export default {
  components: {
    fullWidthNewsletter
  },

  metaInfo: {
    title: "Home",
    description: "This is my home page. I try to highlight all the necessary info here.",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com` },
    ],
  },
}

</script>