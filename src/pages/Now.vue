<template>
  <Layout>
    <h1>{{ $page.now.date }}</h1>
    <div class="markdown-body" v-html="$page.now.content" />
  </Layout>
</template>

<page-query>
query {
  now (id: 1) {
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
