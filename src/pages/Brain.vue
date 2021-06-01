<template>
  <Layout>
      <h2 class="mb-2 ml-1 text-xl font-bold">Select a Category</h2>

      <div class="flex flex-row flex-wrap">
        <a
          v-on:click="unfilterNotes(unfilteredNotes)"
          class="p-2 m-1 text-xs bg-white rounded shadow md:text-lg hover:bg-pink-300"
        >
          All
        </a>
        <a
          v-for="(category, index) in categories"
          :key="index"
          v-on:click="filterNotes(unfilteredNotes, category)"
          class="p-2 m-1 text-xs bg-white rounded shadow md:text-lg hover:bg-pink-300"
        >
          {{ category }}
        </a>
      </div>

      <div class="mx-1 my-2 border divide-y divide-gray-200 rounded">
        <div v-if="selectedCategory" class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            {{ selectedCategory }}
          </h3>
        </div>
        <div
          v-for="note in filteredNotes"
          :key="note.id"
          class="relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <g-link :to="note.node.path">
            <div class="flex justify-between space-x-3">
              <div class="flex-1 min-w-0">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">{{ note.node.title }}</p>
                </a>
              </div>
            </div>
            <div class="mt-1">
              <p class="text-sm text-gray-600 line-clamp-2">
                {{ note.node.content }}
              </p>
            </div>
          </g-link>
        </div>
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
        content
        created_at
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

  data () {
    return {
        selectedCategory: "",
        categories: Array,
        unfilteredNotes: Array,
        filteredNotes: Array
    }
  },

  created() {
    const allNotes = this.$page.brainNotes.edges
    this.unfilteredNotes = allNotes
    this.filteredNotes = allNotes

    let allCategories = []
    allNotes.forEach(function (item) {
        allCategories.push(item.node.category);
    });

    let uniqueCategories = [...new Set(allCategories)];
    this.categories = uniqueCategories
  },

  methods: {
    filterNotes: function (unfilteredNotes, selectedCategory) {
      this.selectedCategory = selectedCategory
      this.filteredNotes = unfilteredNotes.filter(note => note.node.category === selectedCategory)
    },
    unfilterNotes: function (unfilteredNotes) {
      this.selectedCategory = "All"
      this.filteredNotes = unfilteredNotes
    }
  },
}
</script>