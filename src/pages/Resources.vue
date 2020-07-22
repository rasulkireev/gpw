<template>
  <Layout>
      <div class="p-2 mb-4 rounded bg-red-400 border-l-4 border-red-800">
        <p class="text-lg text-red-800">This page is still under construction.</p>
      </div>

      <div v-for="resource in $page.resourceNotes.edges" :key="resource.id" class="mb-1">
        <g-link :to="resource.node.path" class="flex flex-row items-center p-1 text-xl text-gray-900 border-0 rounded-lg hover:bg-gray-200">
          <div class="">
            <p class="text-sm md:text-lg">{{ resource.node.title }}</p>
            <p class="m-0 text-xs text-gray-600">{{ resource.node.category }}</p>
          </div>
        </g-link>
      </div>
  </Layout>
</template>

<page-query>
query ResourceNotes {
  resourceNotes: allResourceNote (sortBy: "category", order: ASC) {
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

}
</script>

<style>

</style>