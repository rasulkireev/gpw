<template>
  <Layout>

    <div class="p-2 mb-4 rounded bg-red-400 border-l-4 border-red-800">
      <p class="text-lg text-red-800">This page is still under construction.</p>
    </div>

    <p class="mb-10 text-blue-700">← <g-link to="/resources">back to posts</g-link></p>

    <article>
        <VueRemarkContent class="markdown-body"></VueRemarkContent>
    </article>

  </Layout>
</template>

<page-query>
</page-query>

<static-query>
</static-query>


<script>
</script>

<style src="../css/github-markdown.css" />