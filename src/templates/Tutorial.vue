<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/tutorials/">back to tutorials</g-link></p>

    <article class="mb-6 prose-sm prose md:prose-2xl h-entry" itemscope itemtype="http://schema.org/Article">
      <h1 class="p-name" itemprop="headline">{{ $page.tutorial.title }}</h1>
      <img class="hidden" itemprop="image" :src="tutorialImage" :alt=$page.tutorial.title>
      <img class="hidden" itemprop="thumbnailUrl" :src="tutorialImage" :alt=$page.tutorial.title>
      
      <!-- Timestamps -->
      <span id="meta" class="hidden m-0 mr-2 text-xs text-gray-600">
        <time class="dt-published" itemprop="datePublished" :datetime="$page.tutorial.dateCreated">{{$page.tutorial.dateCreated}}</time>
        <time class="dt-published" itemprop="dateCreated" :datetime="$page.tutorial.dateCreated">{{$page.tutorial.dateCreated}}</time>
        <time class="dt-modified" itemprop="dateModified" :datetime="$page.tutorial.dateUpdated">{{$page.tutorial.dateUpdated}}</time>
      </span>
      
      <!-- Article Details -->
      <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.tutorial.path' itemprop="url"></a>
      <span class="hidden p-category" itemprop="about">{{ $page.tutorial.category }}</span>
      <span class="hidden p-summary" itemprop="abstract">{{ $page.tutorial.description }}</span>
      <span class="hidden" itemprop="wordCount">{{ $page.tutorial.wordCount }}</span>

      <!-- Author description -->
      <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
          <span itemprop="name">Rasul Kireev</span>
          <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>


      <VueRemarkContent itemprop="articleBody"></VueRemarkContent>
    </article>


    <socialShareButtons
      :title=$page.tutorial.title
      :url='$static.metadata.siteUrl + $page.tutorial.path'
      :text=$page.tutorial.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>

    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this post, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time."
      v-bind:tags="['post']"
      v-bind:metadata="{
        'type': 'post',
        'category': $page.tutorial.category,
        'title': $page.tutorial.title,
      }"
      >
    </fullWidthNewsletter>

    <webMentions
      :wmArray=$page.mentions
      :title=$page.tutorial.title
      :url='$static.metadata.siteUrl + $page.tutorial.path' 
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
      this.tutorialImage = `https://ogi.sh?title=${this.$page.tutorial.title}&unsplashId=${this.$page.tutorial.unsplashImageID}`
    }
  },
  metaInfo() {
    return {
      title: this.$page.tutorial.title,
      script: [
        { src: 'https://hypothes.is/embed.js', body: true }
      ],
      meta: [
        {
          key: "description",
          name: 'description',
          content: this.$page.tutorial.description
        },

        // open-graph tags
        {
          key: "og-title",
          property: 'og:title',
          content: this.$page.tutorial.title
        },
        {
          key: 'og-description',
          property: 'og:description',
          content: this.$page.tutorial.description
        },
        {
          key: 'og-image',
          property: 'og:image',
          content: this.tutorialImage,

        },
        {
          key: "og-url",
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.tutorial.path
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
          content: this.$page.tutorial.title
        },
        {
          key: "twitter-description",
          name: 'twitter:description',
          content: this.$page.tutorial.description
        },
        {
          key: "twitter-image",
          name: "twitter:image",
          content: this.tutorialImage,
        },
      ],
      link: [
          { rel: "canonical", href:  this.$static.metadata.siteUrl + this.$page.tutorial.path },
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