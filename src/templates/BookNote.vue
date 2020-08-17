<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/book-notes/">back to posts</g-link></p>

    <!-- Author description -->
    <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
        <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
    </div>

    <article class="prose-sm prose md:prose-2xl h-entry" itemscope itemtype="http://schema.org/BlogPosting">
        <g-image class="w-16 md:order-last" :src="$page.bookNote.cover" />
        <h1>
          <span class="p-name" itemprop="name">{{ $page.bookNote.title }}</span>
          by
          <span>{{ $page.bookNote.author }}</span>
        </h1>
        <time class="hidden dt-published" itemprop="dateCreated" :datetime="$page.bookNote.date">{{$page.bookNote.date}}</time>
        <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.bookNote.path' itemprop="url"></a>
        <p class="hidden p-category" itemprop="about">{{ $page.bookNote.category }}</p>
        <p class="hidden p-summary" itemprop="abstract">{{ $page.bookNote.description }}</p>

        <VueRemarkContent></VueRemarkContent>
    </article>

    <socialShareButtons
      :title=$page.bookNote.title
      :url='$static.metadata.siteUrl + $page.bookNote.path'
      :text=$page.bookNote.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>


    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this book review, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found arounf the internet."
      v-bind:tags="['book-note']"
      v-bind:metadata="{
        'type': 'book-note',
        'title': $page.bookNote.title,
        }"
    >
    </fullWidthNewsletter>

    <webMentions
      :wmArray=$page.mentions
      :title=$page.bookNote.title
      :url='$static.metadata.siteUrl + $page.bookNote.path' 
    />


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
  mentions: allWebMention (filter: { wmTarget: { regex: $path } }) {
    totalCount
    edges {
      node {
        wmId
        url
        wmProperty
        wmSource
        content {
          text
        }
        author {
          name
          photo
          url
        }
      }
    }
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
import webMentions from "../components/webMentions"

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
    webMentions,
  },
}
</script>