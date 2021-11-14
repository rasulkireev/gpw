<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/articles/">back to posts</g-link></p>

    <article class="mb-6 prose lg:prose-xl h-entry" itemscope itemtype="http://schema.org/Article">
      <h1>{{ $page.post.title }}</h1>
      <VueRemarkContent></VueRemarkContent>
    </article>

    <socialShareButtons
      :title=$page.post.title
      :url='this.url'
      :text=$page.post.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>

    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this post, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time."
      v-bind:tags="['post']"
      v-bind:metadata="{
        'type': 'post',
        'category': $page.post.category,
        'title': $page.post.title,
      }"
      >
    </fullWidthNewsletter>

    <discussOn
      :twitterLink=$page.post.twitterLink
      :hnLink=$page.post.hnLink
      :redditLink=$page.post.redditLink
      :indiehackersLink=$page.post.indiehackersLink
    />

    <webMentions
      :wmArray=$page.mentions
      :title=$page.post.title
      :url='this.url'
    />


  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
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
      postImage: "",
      title: "",
      description: "",
      url: ""
    }
  },
  created() {
    if (this.$page) {
      this.title = this.$page.post.title
      this.postImage = `https://ogi.sh?title=${this.title}&unsplashId=${this.$page.post.unsplashImageID}`
      this.description = this.$page.post.description
      this.url = `${this.$static.metadata.siteUrl}${this.$page.post.path}`
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
            "about": this.$page.post.category,
            "abstract": this.$page.post.description,
            "articleBody": this.$page.post.content,
            "image": this.postImage,
            "thumbnailUrl": this.postImage,
            "dateCreated": this.$page.post.dateCreated,
            "datePublished": this.$page.post.datePublished,
            "dateModified": this.$page.post.dateUpdated,
            "wordCount": this.$page.post.wordCount,
          }
        }
      ],
      meta: [
        { key: "description", name: 'description', content: this.description },

        // open-graph tags
        { key: "og-title", property: 'og:title', content: this.title },
        { key: 'og-description', property: 'og:description', content: this.description },
        { key: 'og-image', property: 'og:image', content: this.postImage },
        { key: "og-url", property: 'og:url', content: this.url },

        // twitter card
        { key: "twitter-card", name: 'twitter:card', content:'summary_large_image' },
        { key: "twitter-title", name: 'twitter:title', content: this.title },
        { key: "twitter-description", name: 'twitter:description', content: this.description },
        { key: "twitter-image", name: "twitter:image", content: this.postImage },
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
    discussOn
  },
}
</script>