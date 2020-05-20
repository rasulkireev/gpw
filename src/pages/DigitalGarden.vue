<template>
  <Layout>
    <div class="flex flex-row flex-wrap justify-between">
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-xl w-30p">
        <g-link to="/articles">
          <h2 class="mb-1 text-lg font-semibold">Articles</h2>
          <p class="text-sm font-normal">Collection of my thoughts, learning and anything else.</p>
        </g-link>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-xl w-30p">
        <g-link to="">
          <h2 class="mb-1 text-lg font-semibold text-gray-600">Newsletter</h2>
          <p class="text-sm font-normal text-gray-600">Collection of the personal letters I sent to my subscribers.</p>
        </g-link>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-xl w-30p">
        <g-link to="/book-notes">
          <h2 class="mb-1 text-lg font-semibold">Book Notes</h2>
          <p class="text-sm font-normal">Collection of notes from the books I read.</p>
        </g-link>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-xl w-30p">
        <g-link to="">
          <h2 class="mb-1 text-lg font-semibold text-gray-600">Journal</h2>
          <p class="text-sm font-normal text-gray-600">Selected snippets from my daily journal</p>
        </g-link>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-xl w-30p">
        <g-link to="">
          <h2 class="mb-1 text-lg font-semibold text-gray-600">Resources</h2>
          <p class="text-sm font-normal text-gray-600">Curated selection of notes from my
            <a class="font-normal text-blue-700 hover:text-blue-600" href="https://www.buildingasecondbrain.com/">
            Second Brain.
            </a>
          </p>
        </g-link>
      </div>
    </div>

  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteUrl
    }
  }
</static-query>


<script>
export default {
    name: 'Digital Garden',
    metaInfo: {
        title: 'Digital Garden',
        meta: [
            {
                key: "description",
                name: 'description',
                content: "Digital Garden"
            },
        ],
        link: [
            { rel: 'canonical', href: `https://rasulkireev.com/digital-garden` },
        ]
    }
}
</script>

<style>

</style>