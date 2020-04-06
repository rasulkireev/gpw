<template>
  <Layout>
    <p class="mb-2 text-blue-700">← <g-link to="/blog/">back to posts</g-link></p>

    <div class="">
      <h1 class="">
        {{ $page.post.title }}
      </h1>
    </div>

    <div class="">
      <div class>
        <g-image alt="Cover image" v-if="$page.post.image" :src="$page.post.image" />
      </div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>

  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {

}
</script>

<style src="../css/github-markdown.css" />