<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/book-notes/">back to book notes</g-link></p>

    <article>
      <div class="flex flex-col items-center mb-10 md:flex-row md:items-start md:space-x-6">
        <g-image class="w-32 mb-10" :src="$page.bookNote.cover" />
        <div class="flex flex-col space-y-2">
          <h1 class="h-full text-2xl font-extrabold leading-10 text-center text-gray-900 md:text-left md:text-5xl">
            {{ $page.bookNote.title }} by {{ $page.bookNote.author }}
          </h1>
          <p class="text-lg font-normal">Rating: <span class="font-bold">{{ $page.bookNote.rating }}</span>/10</p>
          <p class="text-lg font-normal">Date Read: <span class="font-bold">{{ $page.bookNote.dateRead }}</span></p>
          <p>
            <a class="text-lg font-normal text-blue-600 hover:text-blue-800" v-if="$page.bookNote.notAffiliateLink" :href="$page.bookNote.notAffiliateLink">Non Affiliate Link</a>
            <span v-if="$page.bookNote.notAffiliateLink && $page.bookNote.affiliateLink"> | </span>
            <a class="text-lg font-normal text-blue-600 hover:text-blue-800" v-if="$page.bookNote.affiliateLink" :href="$page.bookNote.affiliateLink">Affiliate Link</a>
          </p>
        </div>
      </div>

      <VueRemarkContent class="prose lg:prose-xl"></VueRemarkContent>
    </article>

    <socialShareButtons
      :title='this.title'
      :url='this.url'
      :text=$page.bookNote.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>


    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this book review, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet."
      v-bind:tags="['book-note']"
      v-bind:metadata="{
        'type': 'book-note',
        'title': this.title,
        }"
    >
    </fullWidthNewsletter>

    <discussOn
      :twitterLink=$page.bookNote.twitterLink
      :hnLink=$page.bookNote.hnLink
      :redditLink=$page.bookNote.redditLink
      :indiehackersLink=$page.bookNote.indiehackersLink
    />

    <webMentions
      :wmArray=$page.mentions
      :title='this.title'
      :url='this.url'
    />


  </Layout>
</template>

<page-query>
  query BookNote ($path: String!) {
    bookNote: bookNote (path: $path) {
      title
      author
      path
      intro
      dateRead (format: "MMMM D, Y")
      dateCreated (format: "MMMM D, Y")
      dateUpdated (format: "MMMM D, Y")
      wordCount
      rating
      content
      cover
      unsplashImageID
      notAffiliateLink
      affiliateLink
      twitterLink
      hnLink
      redditLink
      indiehackersLink
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
import discussOn from "../components/discussOn"

export default {
  data() {
    return {
      title: "",
      bookNoteImage: "",
      url: "",
    }
  },
  created() {
    if (this.$page) {
      this.title = `${this.$page.bookNote.title}`
      this.bookNoteImage = `https://ogi.sh?title=${this.title}%20by%20${this.$page.bookNote.author}%20-%20Book%20Summary&unsplashId=${this.$page.bookNote.unsplashImageID}`
      this.url = `${this.$static.metadata.siteUrl}${this.$page.bookNote.path}`
    }
  },
  metaInfo() {
      return {
          title: `${this.title} - Book Summary`,
          script: [
            { src: 'https://hypothes.is/embed.js', body: true },
            {
              type: 'application/ld+json',
              body: true,
              json: {
                "@context": "http://schema.org/",
                "@type": "BlogPosting",
                "author": {
                  "@type": "Person",
                  "name": "Rasul Kireev",
                  "image": "../../src/assets/images/my_photo.jpg"
                },
                "headline": this.title,
                "about": this.$page.bookNote.category,
                "abstract": this.$page.bookNote.description,
                "articleBody": this.$page.bookNote.content,
                "image": this.$page.bookNote.cover,
                "thumbnailUrl": this.$page.bookNote.cover,
                "dateCreated": this.$page.bookNote.dateCreated,
                "datePublished": this.$page.bookNote.datePublished,
                "dateModified": this.$page.bookNote.dateModified,
                "wordCount": this.$page.bookNote.wordCount,
              }
            }
          ],
          meta: [
            { key: "description", name: 'description', content: `${this.intro}` },

            // open-graph tags
            { key: "og-title", property: 'og:title', content: this.title},
            { key: 'og-description', property: 'og:description', content: `${this.$page.bookNote.intro}`},
            { key: 'og-image', property: 'og:image', content: this.bookNoteImage },
            { key: "og-url", property: 'og:url', content: this.url },

            // twitter card
            { key: "twitter-card", name: 'twitter:card', content:'summary_large_image'},
            { key: "twitter-title", name: 'twitter:title', content: this.title },
            { key: "twitter-description", name: 'twitter:description', content: `${this.$page.bookNote.intro}`},
            { key: "twitter-image", name: "twitter:image", content: this.bookNoteImage },
          ],
          link: [
              { rel: "canonical", href: this.url },
          ],
        }
  },

  components: {
    socialShareButtons,
    fullWidthNewsletter,
    webMentions,
    discussOn,
  },
}
</script>