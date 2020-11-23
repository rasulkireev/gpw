<template>
  <Layout>
    <div class="flex flex-col mx-auto mb-10 space-y-6 text-xl">
      <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
      <p class="mb-4 text-xl">
        Welcome to my Personal Website / Digital Garden.
        Currently learning to build web apps, create beautiful visualizations and analyze large datasets. In constant beta mode. Trying to write about my learnings more often.
        <!-- <g-link to="/about/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">Read More</g-link> -->
      </p>
      <p class="mb-4 text-xl">
        Also, check out a
        <g-link to="/favourites/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">
        list of my favourite things.
        </g-link>
      </p>

      <!-- <DigitalGarden class="my-10" /> -->

      <fullWidthNewsletter
        description="Finally, consider signing up for my personal newsletter. I will share the most interesting articles and resources I've encountered during the week."
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
import DigitalGarden from "../components/DigitalGarden"
import webMentions from "../components/webMentions"

export default {
  components: {
    DigitalGarden,
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