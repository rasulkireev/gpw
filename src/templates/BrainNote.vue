<template>
  <Layout>

    <div class="p-2 mb-4 bg-red-400 border-l-4 border-red-800 rounded">
      <p class="text-lg text-red-800">This page is still under construction.</p>
    </div>

    <p class="mb-10 text-blue-700">← <g-link to="/brain/">back to posts</g-link></p>

    <article>
        <VueRemarkContent class="prose-sm prose md:prose-2xl"></VueRemarkContent>
    </article>

    <fullWidthNewsletter
      class="my-4"
      description="If you found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time."
      v-bind:tags="['brain']"
      v-bind:metadata="{
        'type': 'brain',
        'title': $page.brainNote.title,
        }"
    >
    </fullWidthNewsletter>

  </Layout>
</template>

<page-query>
query BrainNote ($path: String!) {
  brainNote: brainNote (path: $path) {
    title
    path
  }
}
</page-query>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
      twitter
    }
  }
</static-query>


<script>
import fullWidthNewsletter from "../components/fullWidthNewsletter"

export default {
  metaInfo() {
    return {
      title: this.$page.brainNote.title,
    }
  },
  components: {
    fullWidthNewsletter,
  }
}
</script>
