<template>
  <Layout>
    <p class="mb-2 text-blue-700">← <g-link to="/blog/">back to posts</g-link></p>


    <div class="">
      <h1 class="">
        {{ $page.post.title }}
      </h1>
    </div>

    <div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>

    <socialShareButtons 
      :title=$page.post.title
      :url='baseURL + $page.post.path'
      :text=$page.post.description
      :tags=tagsToHashTags

      class="lg:top-0 lg:left-0 lg:m-0 lg:mt-64 lg:fixed">
    </socialShareButtons>


    <fullWidthNewsletter class="my-4"></fullWidthNewsletter>

  </Layout>
</template>

<page-query>
query Post ($slug: String!) {
  post: post (path: $slug) {
    title
    description
    date (format: "MMMM D, Y")
    content
    tags
    path
    slug
  }
}
</page-query>

<script>
import fullWidthNewsletter from "../components/fullWidthNewsletter"
import socialShareButtons from "../components/socialShareButtons"

export default {
  data() {
    return {
      baseURL: `https://rasulkireev.com`
    }
  },

  computed: {
    tagsToHashTags() {
      return this.$page.post.tags.map(x => "%23" + x).join(" ");
    }
  },
  
  components: {
    socialShareButtons,
    fullWidthNewsletter,
  },
}
</script>

<style src="../css/github-markdown.css" />