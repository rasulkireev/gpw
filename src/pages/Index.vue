<template>
  <Layout>
    <div class="flex flex-col mx-auto mb-10 space-y-6 text-xl">
      <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
      <p class="mb-4 text-xl">
        I'm a Software Engineer. This website is my Digital Garden, a collections of things I've learnt and created over the years.
      </p>

      <p>
        I like to
        <g-link
          class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
          to="/book-notes/"
        >read</g-link>,
        <g-link
          class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
          to="/articles/"
        >write</g-link>,
        <g-link
          class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
          to="/tutorials/"
        >code</g-link>,
        and do a lot of
        <g-link
          to="/projects/"
          class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
        >other things</g-link>.
        You can read more about me,
        <g-link
          to="/about/"
          class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600"
        >here</g-link>.
      </p>

      <fullWidthNewsletter
        description="Consider signing up for my personal newsletter. I will share the most interesting articles and resources I've encountered during the week."
        v-bind:tags="['home']"
        v-bind:metadata="{
          'type': 'home',
        }"
      >
      </fullWidthNewsletter>

      <webMentions
        :wmArray=$page.mentions
        title="Rasul Kireev Homepage"
        :url='$static.metadata.siteUrl'
      />


    </div>

  </Layout>
</template>

<page-query>
query {
  mentions: allWebMention(filter: { wmTarget: { regex: "/" } }) {
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
import webMentions from "../components/webMentions"

export default {
  components: {
    webMentions,
    fullWidthNewsletter,
  },

  metaInfo: {
    title: "Home",
    description: "This is my home page. I try to highlight all the necessary info here.",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com` },
    ],
  },
}

</script>