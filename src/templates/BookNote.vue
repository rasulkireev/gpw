<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/book-notes/">back to book notes</g-link></p>

    <article class="h-entry" itemscope itemtype="http://schema.org/Article">
        
        <div class="flex flex-col items-center mb-10 md:flex-row md:items-start md:space-x-6">
          <g-image class="w-32 mb-10" itemprop="image" :src="$page.bookNote.cover" />
          <div class="flex flex-col space-y-2">
            <h1 class="h-full text-2xl font-extrabold leading-10 text-center text-gray-900 md:text-left md:text-5xl p-name" itemprop="headline">
              {{ $page.bookNote.title }} by {{ $page.bookNote.author }}
            </h1>
            <p class="text-lg font-normal">Rating: <span class="font-bold">{{ $page.bookNote.rating }}</span>/10</p>
            <p class="text-lg font-normal">Date Read: <span class="font-bold">{{ $page.bookNote.dateRead }}</span></p>
            <a class="text-lg font-normal text-blue-600 hover:text-blue-800" :href="$page.bookNote.indieboundLink">Buy on IndieBound</a>
          </div>
        </div>
        
        <!-- Timestamps -->
        <span id="meta" class="hidden m-0 mr-2 text-xs text-gray-600">
          <g-image class="hidden w-32" itemprop="thumbnailUrl" :src="$page.bookNote.cover" />
          <time class="hidden dt-published" itemprop="dateCreated" :datetime="$page.bookNote.dateCreated">{{$page.bookNote.dateCreated}}</time>
          <time class="hidden dt-published" itemprop="datePublished" :datetime="$page.bookNote.dateCreated">{{$page.bookNote.dateCreated}}</time>
          <time class="hidden dt-published" itemprop="dateModified" :datetime="$page.bookNote.dateUpdated">{{$page.bookNote.dateCreated}}</time>
        </span>
        
        <!-- Article Details -->
        <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.bookNote.path' itemprop="url"></a>
        <p class="hidden p-category" itemprop="about">{{ $page.bookNote.category }}</p>
        <p class="hidden p-summary" itemprop="abstract">{{ $page.bookNote.description }}</p>
        <span class="hidden" itemprop="wordCount">{{ $page.bookNote.wordCount }}</span>
        
        <!-- Author description -->
        <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
            <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
            <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
        </div>


        <VueRemarkContent class="prose lg:prose-xl" itemprop="articleBody"></VueRemarkContent>
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
    dateRead (format: "MMMM D, Y")
    dateCreated (format: "MMMM D, Y")
    dateUpdated (format: "MMMM D, Y")
    wordCount
    rating
    content
    cover
    unsplashImageID
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
  created() {
    if (this.$page) {
      this.bookNoteImage = `https://ogi.sh?title=Rasul's%20Notes%20on%20${this.$page.bookNote.title}%20by%20${this.$page.bookNote.author}&unsplashId=${this.$page.bookNote.unsplashImageID}`
    }
  },
  metaInfo() {
      return {
          title: this.$page.bookNote.title,
          script: [
            { src: 'https://hypothes.is/embed.js', body: true }
          ],
          meta: [
            {
              key: "description",
              name: 'description',
              content: `Rasul's Notes on ${this.$page.bookNote.title}`
            },

            // open-graph tags
            {
              key: "og-title",
              property: 'og:title',
              content: this.$page.bookNote.title
            },
            {
              key: 'og-description',
              property: 'og:description',
              content: `Rasul's Notes on ${this.$page.bookNote.title}`
            },
            {
              key: 'og-image',
              property: 'og:image',
              content: this.bookNoteImage,

            },
            {
              key: "og-url",
              property: 'og:url',
              content: this.$static.metadata.siteUrl + this.$page.bookNote.path
            },

            // twitter card
            {
              key: "twitter-card",
              name: 'twitter:card',
              content:'summary_large_image'
            },
            {
              key: "twitter-title",
              name: 'twitter:title',
              content: this.$page.bookNote.title
            },
            {
              key: "twitter-description",
              name: 'twitter:description',
              content: `Rasul's Notes on ${this.$page.bookNote.title}`
            },
            {
              key: "twitter-image",
              name: "twitter:image",
              content: this.bookNoteImage,
            },
          ],
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