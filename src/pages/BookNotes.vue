<template>
    <Layout>
        <section>
            <div class="flex flex-col mx-auto mb-10 space-y-6 text-xl">
              <p class="mb-4 text-xl">
                  These book notes were heavily influenced by <a
                        class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
                        to="https://sive.rs/book"
                      >Derek Sivers</a> and <a
                        class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
                        to="https://www.nateliason.com/notes"
                      >Nat Eliason</a>.
              </p>
            </div>
            <div v-for="note in $page.bookNotes.edges" :key="note.id" class="mb-1">
                <g-link :to="note.node.path" class="flex flex-col items-center p-3 space-x-0 space-y-2 text-xl text-gray-900 border-0 rounded-lg md:space-x-4 md:space-x-0 md:flex-row hover:bg-gray-200" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <g-image :src="note.node.cover" class="self-start inline w-24 h-auto align-middle md:pt-3" />
                    <div class="md:flex-col md:space-y-2 md:flex">
                      <div class="flex flex-col space-y-2">
                          <p class="text-xl font-semibold md:text-2xl">{{ note.node.title }} by {{ note.node.author }}</p>
                          <p class="text-sm text-gray-600">
                            <span>Rating: {{ note.node.rating }}/10</span>
                            <span class="ml-2">Date Read: <time class="dt-published" itemprop="dateCreated" :datetime="note.node.dateRead">{{ note.node.dateRead }}</time></span>
                          </p>
                          <p class="m-0 text-base text-gray-800">
                            {{ note.node.intro }}
                          </p>
                      </div>
                    </div>
                </g-link>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query BookNotes {
  bookNotes: allBookNote (sortBy: "rating", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        author
        cover
        intro
        rating
        dateRead (format: "MMMM D, Y")
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