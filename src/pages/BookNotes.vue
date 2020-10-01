<template>
    <Layout>
        <section>
            <div v-for="note in $page.bookNotes.edges" :key="note.id" class="mb-1">
                <g-link :to="note.node.path" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="note.node.cover" class="self-start inline w-16 h-16 p-2 mr-4 align-middle" />
                    <div class="">
                        <p class="text-sm md:text-lg">{{ note.node.title }}</p>
                        <p class="m-0 text-xs text-gray-600">
                          {{ note.node.intro }}
                          <time class="dt-published" itemprop="dateCreated" :datetime="note.node.dateCreated"></time>
                        </p>
                    </div>
                </g-link>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query BookNotes {
  bookNotes: allBookNote (sortBy: "dateCreated", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        cover
        intro
        dateCreated (format: "MMMM D, Y")
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Book Notes',
    description: "Nicely formatted thoughts and notes on books I've read",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com/book-notes` },
    ],
  },
}
</script>

<style>

</style>