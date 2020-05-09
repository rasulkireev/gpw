<template>
    <Layout>
        <section id="blog-posts" >
          <div v-for="post in $page.posts.edges" :key="post.id" class="mb-1">
                <g-link :to="post.node.slug" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="post.node.icon" class="self-start inline w-16 h-16 p-2 mr-4 align-middle" />
                    <div class="">
                        <p class="text-sm md:text-lg">{{ post.node.title }}</p>
                        <p class="m-0 text-xs text-gray-600">
                          {{ post.node.description }}
                          <time class="dt-published" itemprop="dateCreated" :datetime="post.node.date"></time>
                        </p>
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
        timeToRead
        slug
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Digital Garden',
    description: "List of blog posts I have written.",
  },
}
</script>

<style>

</style>