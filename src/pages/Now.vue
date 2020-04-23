<template>
  <Layout>
    
    <section class="mb-6 h-entry" itemscope itemtype="http://schema.org/BlogPosting">

      <div style="display: none;" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a class="p-author h-card" rel="author" href="https://rasulkireev.com">
          <span itemprop="givenName">Rasul</span>
          <span itemprop='familyName'>Kireev</span>
        </a>
        <img src="../../src/assets/images/my_photo.jpg" class="u-photo" height="200px" itemprop="image" />
      </div>

      <div class="mb-4 border-b-2 border-gray-200">
        <h1 class="text-2xl font-semibold p-name" itemprop="name">What I'm Up To Now</h1>
        <p class="text-sm text-gray-600">
          Updated on <time class="dt-published" itemprop="dateCreated" :datetime="$page.now.date">{{ $page.now.date }}</time>
        </p>
      </div>
      
      <div class="markdown-body" v-html="$page.now.content" />

      <p class="my-4">
        (This is a 
        <a class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600" href="https://nownownow.com/">
          now
        </a>
        page, and if you have your own site, 
        <a class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600" href="https://nownownow.com/about">
          you should make one
        </a>
        , too.)
      </p>

    </section>

  </Layout>
</template>

<page-query>
query {
  now (id: 1) {
    date (format: "MMMM D, Y")
    content
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


const nowTitle = "Rasul Kireev | Now"
const nowDescription = "What I'm Up To Now"
const nowUrl = "https://rasulkireev.com/now/"

export default {

  metaInfo: {
    title: `Now - ${nowTitle}`,
    meta: [
      {
        key: "description",
        name: 'description',
        content: nowDescription
      },
      {
        key: "og-title",
        property: 'og:title',
        content: nowTitle
      },
      {
        key: 'og-description',
        property: 'og:description',
        content: nowDescription
      },
      {
        key: "og-url",
        property: 'og:url',
        content: nowUrl
      },
      { 
        key: "twitter-title",
        name: 'twitter:title', 
        content: nowTitle
      },
      { 
        key: "twitter-description",
        name: 'twitter:description', 
        content: nowDescription
      },
    ]
  },
}
</script>

<style src="../css/github-markdown.css" />
