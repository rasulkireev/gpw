<template>
    <Layout>
        <section>
          <div v-for="tutorial in $page.tutorials.edges" :key="tutorial.id" class="mb-1">
                <g-link :to="tutorial.node.path" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="tutorial.node.icon" class="self-start inline w-auto h-16 p-2 mr-4 align-middle" itemprop="image" />
                    <div class="">
                        <p class="text-sm md:text-lg">{{ tutorial.node.title }}</p>
                        <p class="m-0 text-xs text-gray-600" itemprop="headline">{{ tutorial.node.description }}</p>
                        <div id="blog-post-info" class="hidden">
                          <time class="dt-published" itemprop="datePublished" :datetime="tutorial.node.dateCreated">{{tutorial.node.dateCreated}}</time>
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
query Tutorials {
  tutorials: allTutorial (sortBy: "dateCreated", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        icon
        description
        dateCreated (format: "MMMM D, Y")
        dateUpdated (format: "MMMM D, Y")
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