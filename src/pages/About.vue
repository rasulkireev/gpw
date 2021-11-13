<template>
  <Layout>

    <div class="relative overflow-hidden bg-white">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <div class="text-lg max-w-prose">
            <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">About Me</h1>
          </div>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-900 prose-indigo">
          <p>My name is Rasul, I'm currently a Software Engineer at Guy Carpenter where I help with</p>
          <ul>
            <li>designing and deploying modern data lake and related tooling on Azure</li>
            <li>developing Django/React applications with K8S deployment</li>
            <li>modeling datasets for easy consumption by the rest of the organization via BI tools</li>
          </ul>
          <p>
            In my free time, I love to do more web dev. More specifically, I like to develop small and fun projects that help
            me learn new technologies. You can see a list of my projects <a href="https://rasulkireev/projects">here</a>.
          </p>
          <p>
            As a programmer, I learned to love writing. I try to write regularly, be it <a href="https://rasulkireev.com/tutorials/">
            tech tutorials</a> or about <a href="https://rasulkireev.com/articles/">any other topic</a>. An extension of written
            tech tutorials was to start making videos. For that, you can check
            <a href="https://www.youtube.com/channel/UC-r4_CjDp4n4O-36rnUe8gg">my Youtube channel</a>.
          </p>
          <p>
            I like to experiment a lot. Trying something new is a passion of mine. Some of my recent successes were with
            brewing Kombucha, fermenting different foods, and baking bread. On the failure side of things, I can't keep
            a plant alive for more than a week.
          </p>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-900 prose-indigo">
          <div class="flex flex-row space-x-2">
            <a class="text-5xl" href="https://twitter.com/rasulkireev"><i class="text-blue-600 lab la-twitter"></i></a>
            <a class="text-5xl" href="https://github.com/rasulkireev"><i class="text-black lab la-github"></i></a>
            <a class="text-5xl" href="mailto:kireevr1996@gmail.com"><i class="text-black las la-envelope"></i></a>
            <a class="text-5xl" href="https://www.reddit.com/user/rasulkireev"><i class="text-red-500 lab la-reddit"></i></a>
            <a class="text-5xl" href="https://www.producthunt.com/@rasul_kireev"><i class="text-red-700 lab la-product-hunt"></i></a>
            <a class="text-5xl" href="https://stackexchange.com/users/7977534/rasul-kireev"><i class="text-blue-500 lab la-stack-exchange"></i></a>
            <a class="text-5xl" href="https://angel.co/u/rasul-kireev"><i class="text-black lab la-angellist"></i></a>
            <a class="text-5xl" href="https://www.goodreads.com/user/show/37986483-rasul-kireev"><i class="text-yellow-800 lab la-goodreads-g"></i></a>
            <a class="text-5xl" href="https://news.ycombinator.com/user?id=rasulkireev"><i class="text-yellow-500 lab la-hacker-news"></i></a>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
    description: "Learn about Rasul.",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com/about` },
    ],
  }
}
</script>
