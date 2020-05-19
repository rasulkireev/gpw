<template>
  <Layout>
    <div class="flex flex-row flex-wrap justify-between">
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md w-30p">
        <h1 class="mb-1 text-lg font-semibold">
          <g-link to="/articles">Articles</g-link>
        </h1>
        <p class="text-sm">I try to write more. This is a small collection of my learnings & thoughts.</p>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md w-30p">
        <h1 class="mb-1 text-lg font-semibold">
          <g-link to="">Newsletter</g-link>
        </h1>
        <p class="text-sm">Collection of the personal letters I sent to my subscribers.</p>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md w-30p">
        <h1 class="mb-1 text-lg font-semibold">
          <g-link to="/book-notes">Book Notes</g-link>
        </h1>
        <p class="text-sm">Hello</p>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md w-30p">
        <h1 class="mb-1 text-lg font-semibold">
          <g-link to="/journal">Journal</g-link>
        </h1>
        <p class="text-sm">Hello</p>
      </div>
      <div class="p-4 m-2 border border-gray-300 rounded-lg shadow-md w-30p">
        <h1 class="mb-1 text-lg font-semibold">
          <g-link to="/resources">Resources</g-link>
        </h1>
        <p class="text-sm">Hello</p>
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
            { rel: 'canonical', href: "https://rasulkireev.com/digital-garden" },
        ]
    }
}
</script>

<style>

</style>