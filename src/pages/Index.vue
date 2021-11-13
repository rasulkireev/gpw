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

        <div class="mt-6 text-gray-900">
          <div class="flex flex-row space-x-2">
            <a class="text-5xl" href="https://twitter.com/rasulkireev"><i class="text-blue-600 lab la-twitter"></i></a>
            <a class="text-5xl" href="https://github.com/rasulkireev"><i class="text-black lab la-github"></i></a>
            <a class="text-5xl" href="mailto:kireevr1996@gmail.com"><i class="text-black las la-envelope"></i></a>
            <a class="text-5xl" href="https://www.producthunt.com/@rasul_kireev"><i class="text-red-700 lab la-product-hunt"></i></a>
            <a class="text-5xl" href="https://www.reddit.com/user/rasulkireev"><i class="text-red-500 lab la-reddit"></i></a>
            <a class="text-5xl" href="https://stackexchange.com/users/7977534/rasul-kireev"><i class="text-blue-500 lab la-stack-exchange"></i></a>
            <a class="text-5xl" href="https://angel.co/u/rasul-kireev"><i class="text-black lab la-angellist"></i></a>
            <a class="text-5xl" href="https://www.goodreads.com/user/show/37986483-rasul-kireev"><i class="text-yellow-800 lab la-goodreads-g"></i></a>
            <a class="text-5xl" href="https://news.ycombinator.com/user?id=rasulkireev"><i class="text-yellow-500 lab la-hacker-news"></i></a>
          </div>
        </div>

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
        showReplies=false
        showMentions=false
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