<template>
  <Layout>
    <p class="mb-10 text-blue-700">← <g-link to="/brain/">back to posts</g-link></p>

    <article class="prose lg:prose-xl">
        <h1>{{ $page.brainNote.title }}</h1>
        <VueRemarkContent></VueRemarkContent>
    </article>

    <fullWidthNewsletter
      class="my-4"
      description="If you found it useful, please consider signing up to my newsletter. Every week, I share my thoughts on cool stuff I found around the internet. No spam, ever. Unsubscribe any time."
      v-bind:tags="['brain']"
      v-bind:metadata="{
        'type': 'brain',
        'category': $page.brainNote.category,
        'title': $page.brainNote.title,
        }"
    >
    </fullWidthNewsletter>

  </Layout>
</template>

<page-query>
query BrainNote ($path: String!) {
  brainNote: brainNote (path: $path) {
    title
    category
    path
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

export default {
  metaInfo() {
      return {
          title: this.$page.brainNote.title,
          script: [
            { src: 'https://hypothes.is/embed.js', body: true }
          ],
          meta: [
            {
              key: "description",
              name: 'description',
              content: `Rasul's Notes on ${this.$page.brainNote.title}`
            },

            // open-graph tags
            {
              key: "og-title",
              property: 'og:title',
              content: this.$page.brainNote.title
            },
            {
              key: 'og-description',
              property: 'og:description',
              content: `Rasul's Notes on ${this.$page.brainNote.title}`
            },
            {
              key: "og-url",
              property: 'og:url',
              content: this.$static.metadata.siteUrl + this.$page.brainNote.path
            },

            // twitter card
            {
              key: "twitter-card",
              name: 'twitter:card',
              content:'summary'
            },
            {
              key: "twitter-title",
              name: 'twitter:title',
              content: this.$page.brainNote.title
            },
            {
              key: "twitter-description",
              name: 'twitter:description',
              content: `Rasul's Notes on ${this.$page.brainNote.title}`
            },
            {
              key: "twitter-site",
              name: 'twitter:site',
              content: `@rasulkireev`
            }
          ],
          link: [
              { rel: "canonical", href: `https://rasulkireev.com${this.$page.brainNote.path}` },
          ],
        }
  },
  components: {
    fullWidthNewsletter,
  }
}
</script>
