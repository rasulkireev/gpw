<template>
  <Layout>
    <h1>Now</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<page-query>
query Now ($path: String!) {
  now: now (path: $path) {
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {

}
</script>
