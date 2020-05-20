<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/articles/">back to posts</g-link></p>

    <article class="h-entry" itemscope itemtype="http://schema.org/BlogPosting">

      <!-- Author description -->
      <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
          <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>

      <div class="mb-4 border-b border-gray-200 border-solid">
        <div id="title" class="flex flex-col md:flex-row md:justify-between">
          <g-image class="w-16 md:order-last" :src="$page.bookNote.cover" />
          <div>
            <div>
              <h1 class="my-3 text-3xl font-semibold leading-8">
                <span class="p-name" itemprop="name">{{ $page.bookNote.title }}</span> 
                by 
                <span>{{ $page.bookNote.author }}</span></h1>
            </div>
            <p id="meta" class="m-0 mr-2 text-xs text-gray-600"><time class="dt-published" itemprop="dateCreated" :datetime="$page.bookNote.date">{{$page.bookNote.date}}</time></p>
          </div>
        </div>

        <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.bookNote.path' itemprop="url"></a>
        <p class="hidden p-category" itemprop="about">{{ $page.bookNote.category }}</p>
        <p class="hidden p-summary" itemprop="abstract">{{ $page.bookNote.description }}</p>

      </div>

        <div class="markdown-body" v-html="$page.bookNote.content" />
    </article>

    <socialShareButtons
      :title=$page.bookNote.title
      :url='$static.metadata.siteUrl + $page.bookNote.path'
      :text=$page.bookNote.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>


    <fullWidthNewsletter class="my-4"></fullWidthNewsletter>

  </Layout>
</template>

<page-query>
query BookNote ($path: String!) {
  bookNote: bookNote (path: $path) {
    title
    author
    path
    content
    cover
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
import socialShareButtons from "../components/socialShareButtons"

export default {
  metaInfo() {
      return {  
          title: this.$page.bookNote.title,
          link: [
              { rel: "canonical", href: `https://rasulkireev.com${this.$page.bookNote.path}` },
          ],
        }
  },

  components: {
    socialShareButtons,
    fullWidthNewsletter,
  },
}
</script>

<style src="../css/github-markdown.css" />