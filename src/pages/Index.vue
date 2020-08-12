<template>
  <Layout>
    <div class="mx-auto mb-10 text-xl">
        <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
        <p class="mb-4 text-xl">
          Currently learning to build web apps, create beautiful visualizations and analyze large datasets. In constant beta mode. Trying to write about my learnings more often.
          <!-- <g-link to="/about/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">Read More</g-link> -->
        </p>
        <p class="mb-4 text-xl">
          Also, check out a
          <g-link to="/favourites/" class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600">
          list of my favourite things.
          </g-link>
        </p>

      <div class="mb-4">
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://twitter.com/rasulkireev"><i class="text-3xl lab la-twitter"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://github.com/rasulkireev"><i class="text-3xl lab la-github"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://www.linkedin.com/in/rasul-kireev/"><i class="text-3xl lab la-linkedin-in"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon" rel="me" href="https://keybase.io/rasulkireev"><i class="text-3xl lab la-keybase"></i></a>
        <a class="font-normal bg-transparent border-0 border-transparent social-icon u-email" rel="me" href="mailto:me@rasulkireev.com"><i class="text-3xl las la-at"></i></a>
      </div>

      <DigitalGarden />

      <fullWidthNewsletter
        description="Finally, consider signing up for my personal newsletter. I will share the most interesting articles and resources I've encountered during the week."
        v-bind:tags="['home']">
      </fullWidthNewsletter>

    </div>

  </Layout>
</template>

<script>
import fullWidthNewsletter from "../components/fullWidthNewsletter"
import DigitalGarden from "../components/DigitalGarden"

export default {
  components: {
    DigitalGarden
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