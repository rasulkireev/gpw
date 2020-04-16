<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/blog/">back to posts</g-link></p>

    <article class="h-entry" itemscope itemtype="http://schema.org/BlogPosting">
      
      <!-- Author description -->
      <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
          <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>
     
      <div class="mb-4 border-b border-gray-200 border-solid">
        <div id="title" class="flex flex-col md:flex-row md:justify-between">
          <g-image class="w-16 md:order-last" :src="$page.post.icon" />
          <div>
            <h1 class="my-3 text-3xl font-semibold leading-8 p-name" itemprop="name">{{ $page.post.title }}</h1>
            <p id="meta" class="m-0 mr-2 text-xs text-gray-600"><time class="dt-published" itemprop="dateCreated" :datetime="$page.post.date">{{$page.post.date}}</time></p>
          </div>
        </div>

        <a class="hidden u-url" :href='baseURL + $page.post.path' itemprop="url"></a>
        <p class="hidden p-category" itemprop="about">{{ $page.post.category }}</p>
        <p class="hidden p-summary" itemprop="abstract">{{ $page.post.description }}</p>
        
      </div>

        <div class="markdown-body" v-html="$page.post.content" />
    </article>

    <socialShareButtons
      :title=$page.post.title
      :url='baseURL + $page.post.path'
      :text=$page.post.description
      :tags=tagsToHashTags

      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>


    <fullWidthNewsletter class="my-4"></fullWidthNewsletter>

  </Layout>
</template>

<page-query>
query Post ($slug: String!) {
  post: post (path: $slug) {
    title
    description
    category
    date (format: "MMMM D, Y")
    content
    tags
    icon
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