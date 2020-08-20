<template>
  <Layout>
      <div class="p-2 mb-4 bg-red-400 border-l-4 border-red-800 rounded">
        <p class="text-lg text-red-800">This page is still under construction.</p>
      </div>

      <div v-for="note in $page.brainNotes.edges" :key="note.id" class="mb-1">
        <g-link :to="note.node.path" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200">
          <div class="">
            <p class="text-sm md:text-lg">{{ note.node.title }}</p>
            <p class="m-0 text-xs text-gray-600">{{ note.node.category }}</p>
          </div>
        </g-link>
      </div>
  </Layout>
</template>

<page-query>
query BrainNotes {
  brainNotes: allBrainNote (sortBy: "category", order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        category
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Brain',
    description: "This is what my brain looks like. Just kidding, that's the contents of my Joplin Notebook (a.k.a Second Brain)",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com/brain` },
    ],
  },
}
</script>

<style>

</style>