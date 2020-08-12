<template>
    <Layout>
        <section>
          <div v-for="post in $page.posts.edges" :key="post.id" class="mb-1">
                <g-link :to="post.node.path" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="post.node.icon" class="self-start inline w-16 h-16 p-2 mr-4 align-middle" itemprop="image" />
                    <div class="">
                        <p class="text-sm md:text-lg">{{ post.node.title }}</p>
                        <p class="m-0 text-xs text-gray-600" itemprop="headline">{{ post.node.description }}</p>
                        <div id="blog-post-info" class="hidden">
                          <time class="dt-published" itemprop="datePublished" :datetime="post.node.date">{{post.node.date}}</time>
                          <span itemprop="author">Rasul Kireev</span>
                          <a href="https://rasulkireev.com" itemprop="publisher">https://rasulkireev.com</a>
                        </div> 
                    </div>
                </g-link>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "date", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        icon
        description
        date (format: "MMMM D, Y")
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Articles',
    description: "List of articles I have written.",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com/articles` },
    ],
  },
}
</script>

<style>

</style>