<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/articles/">back to posts</g-link></p>

    <article class="mb-6 prose-sm prose md:prose-2xl h-entry" itemscope itemtype="http://schema.org/Article">
      <h1 class="p-name" itemprop="headline">{{ $page.post.title }}</h1>
      <img class="hidden" itemprop="image" :src="postImage" :alt=$page.post.title>
      <img class="hidden" itemprop="thumbnailUrl" :src="postImage" :alt=$page.post.title>
      
      <!-- Timestamps -->
      <span id="meta" class="hidden m-0 mr-2 text-xs text-gray-600">
        <time class="dt-published" itemprop="datePublished" :datetime="$page.post.dateCreated">{{$page.post.dateCreated}}</time>
        <time class="dt-published" itemprop="dateCreated" :datetime="$page.post.dateCreated">{{$page.post.dateCreated}}</time>
        <time class="dt-modified" itemprop="dateModified" :datetime="$page.post.dateUpdated">{{$page.post.dateUpdated}}</time>
      </span>
      
      <!-- Article Details -->
      <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.post.path' itemprop="url"></a>
      <span class="hidden p-category" itemprop="about">{{ $page.post.category }}</span>
      <span class="hidden p-summary" itemprop="abstract">{{ $page.post.description }}</span>
      <span class="hidden" itemprop="wordCount">{{ $page.post.wordCount }}</span>

      <!-- Author description -->
      <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
          <span itemprop="name">Rasul Kireev</span>
          <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>


      <VueRemarkContent itemprop="articleBody"></VueRemarkContent>
    </article>


    <socialShareButtons
      :title=$page.post.title
      :url='$static.metadata.siteUrl + $page.post.path'
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

    <webMentions
      :wmArray=$page.mentions
      :title=$page.post.title
      :url='$static.metadata.siteUrl + $page.post.path' 
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
      this.postImage = `https://ogi.sh?title=${this.$page.post.title}&unsplashId=${this.$page.post.unsplashImageID}`
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      script: [
        { src: 'https://hypothes.is/embed.js', body: true }
      ],
      meta: [
        {
          key: "description",
          name: 'description',
          content: this.$page.post.description
        },

        // open-graph tags
        {
          key: "og-title",
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          key: 'og-description',
          property: 'og:description',
          content: this.$page.post.description
        },
        {
          key: 'og-image',
          property: 'og:image',
          content: this.postImage,

        },
        {
          key: "og-url",
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.post.path
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
          content: this.$page.post.title
        },
        {
          key: "twitter-description",
          name: 'twitter:description',
          content: this.$page.post.description
        },
        {
          key: "twitter-image",
          name: "twitter:image",
          content: this.postImage,
        },
      ],
      link: [
          { rel: "canonical", href:  this.$static.metadata.siteUrl + this.$page.post.path },
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