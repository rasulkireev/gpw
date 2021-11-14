<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/tutorials/">back to tutorials</g-link></p>

    <article class="mb-6 prose lg:prose-xl">
      <h1>{{ $page.tutorial.title }}</h1>
      <VueRemarkContent itemprop="articleBody"></VueRemarkContent>
    </article>

    <socialShareButtons
      :title=$page.tutorial.title
      :url='this.url'
      :text=$page.tutorial.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>

    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this tutorial, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time."
      v-bind:tags="['tutorial']"
      v-bind:metadata="{
        'type': 'tutorial',
        'category': $page.tutorial.category,
        'title': $page.tutorial.title,
      }"
      >
    </fullWidthNewsletter>

    <discussOn
      :twitterLink=$page.tutorial.twitterLink
      :hnLink=$page.tutorial.hnLink
      :redditLink=$page.tutorial.redditLink
      :indiehackersLink=$page.tutorial.indiehackersLink
    />


    <webMentions
      :wmArray=$page.mentions
      :title=$page.tutorial.title
      :url='this.url'
    />


  </Layout>
</template>

<page-query>
  query Tutorial ($path: String!) {
    tutorial: tutorial (path: $path) {
      title
      description
      category
      wordCount
      dateCreated (format: "MMMM D, Y")
      dateUpdated (format: "MMMM D, Y")
      unsplashImageID
      content
      icon
      path
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
      tutorialImage: "",
      title: "",
      description: "",
      url: ""
    }
  },
  created() {
    if (this.$page) {
      this.title = this.$page.tutorial.title
      this.description = this.$page.tutorial.description
      this.url = `${this.$static.metadata.siteUrl}${this.$page.tutorial.path}`
      this.tutorialImage = `https://ogi.sh?title=${this.$page.tutorial.title}&unsplashId=${this.$page.tutorial.unsplashImageID}`
    }
  },
  metaInfo() {
    return {
      title: this.title,
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
            "about": this.$page.tutorial.category,
            "abstract": this.$page.tutorial.description,
            "articleBody": this.$page.tutorial.content,
            "image": this.tutorialImage,
            "thumbnailUrl": this.tutorialImage,
            "dateCreated": this.$page.tutorial.dateCreated,
            "datePublished": this.$page.tutorial.dateCreated,
            "dateModified": this.$page.tutorial.dateUpdated,
            "wordCount": this.$page.tutorial.wordCount,
          }
        }
      ],
      meta: [
        { key: "description", name: 'description', content: this.description },

        // open-graph tags
        { key: "og-title", property: 'og:title', content: this.title },
        { key: 'og-description', property: 'og:description', content: this.description },
        { key: 'og-image', property: 'og:image', content: this.tutorialImage },
        { key: "og-url", property: 'og:url', content: this.url },

        // twitter card
        { key: "twitter-card", name: 'twitter:card', content:'summary_large_image' },
        { key: "twitter-title", name: 'twitter:title', content: this.title },
        { key: "twitter-description", name: 'twitter:description', content: this.description },
        { key: "twitter-image", name: "twitter:image", content: this.tutorialImage },
      ],
      link: [
          { rel: "canonical", href:  this.url },
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