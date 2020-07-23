<template>
  <Layout>

    <div class="p-2 mb-4 rounded bg-red-400 border-l-4 border-red-800">
      <p class="text-lg text-red-800">This page is still under construction.</p>
    </div>

    <p class="mb-10 text-blue-700">← <g-link to="/resources">back to posts</g-link></p>

    <article>
        <VueRemarkContent class="markdown-body"></VueRemarkContent>
    </article>

    <fullWidthNewsletter
      class="my-4"
      description="If you found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time.">
    </fullWidthNewsletter>
  </Layout>
</template>

<page-query>
query ResourceNote ($path: String!) {
  resourceNote: resourceNote (path: $path) {
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
      title: this.$page.resourceNote.title,
    }
  },
  components: {
    fullWidthNewsletter,
  }
}
</script>

<style src="../css/github-markdown.css" />