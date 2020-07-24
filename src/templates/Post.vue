<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/articles/">back to posts</g-link></p>

    <article class="mb-6 h-entry" itemscope itemtype="http://schema.org/BlogPosting">

      <!-- Author description -->
      <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <a class="p-author h-card" rel="author" href="https://rasulkireev.com"><span itemprop="givenName">Rasul</span> <span itemprop='familyName'>Kireev</span></a>
          <span itemprop="name">Rasul Kireev</span>
          <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>


      <div class="mb-4 border-b border-gray-200 border-solid">
        <div id="title" class="flex flex-col md:flex-row md:justify-between">
          <g-image class="w-16 h-auto md:w-auto md:h-16 md:order-last" :src="$page.post.icon" itemprop="image" />
          <div>
            <h1 class="my-3 text-3xl font-semibold leading-8 p-name" itemprop="headline">{{ $page.post.title }}</h1>
            <p id="meta" class="hidden m-0 mr-2 text-xs text-gray-600"><time class="dt-published" itemprop="datePublished" :datetime="$page.post.date">{{$page.post.date}}</time></p>
          </div>
        </div>

        <a class="hidden u-url" :href='$static.metadata.siteUrl + $page.post.path' itemprop="url"></a>
        <p class="hidden p-category" itemprop="about">{{ $page.post.category }}</p>
        <p class="hidden p-summary" itemprop="abstract">{{ $page.post.description }}</p>
        <p class="hidden" itemprop="publisher">Rasul Kireev</p>

      </div>

        <!-- <div class="markdown-body" v-html="$page.post.content" /> -->
        <VueRemarkContent class="markdown-body"></VueRemarkContent>
    </article>


    <socialShareButtons
      :title=$page.post.title
      :url='$static.metadata.siteUrl + $page.post.path'
      :text=$page.post.description
      class="lg:top-1/3 lg:left-0 lg:m-0 lg:fixed">
    </socialShareButtons>

    <fullWidthNewsletter
      class="my-4"
      description="If you enjoyed this post, or found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time.">
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
    date (format: "MMMM D, Y")
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
  mounted() {
        let hypothesisScript = document.createElement("script")
        hypothesisScript.setAttribute('src', 'https://hypothes.is/embed.js')
        document.body.appendChild(hypothesisScript)
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
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
          content: 'https://ogi.sh?title=' + this.$page.post.title + '&unsplashId=' + this.$page.post.unsplashImageID,

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
          content: 'https://ogi.sh?title=' + this.$page.post.title + '&unsplashId=' + this.$page.post.unsplashImageID,
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

<style src="../css/github-markdown.css" />