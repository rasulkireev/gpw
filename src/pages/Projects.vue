<template>
  <Layout>
    <div class="relative overflow-hidden bg-white">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <div class="text-lg max-w-prose">
            <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Projects</h1>
          </div>
          <p class="mt-8 text-xl leading-8 text-gray-900">
            I love to work on small and fun projects in my free time. These projects are the
            <a href="https://www.nateliason.com/blog/self-education" target="_blank">perfect vehicle for learning</a>.
            In addition to learning, these projects help me find like-minded people online.
          </p>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-900 prose-indigo">
          <h2>Current</h2>
          <ul>
            <li> <a href="https://builtwithdjango.com" target="_blank">Built with Django</a> was built to highlight all things Django, mainly projects and makers. </li>
            <li> <a href="https://gettalentleads.com" target="_blank">Talent Leads</a> helps startups find the Best Talent. </li>
            <li> <a href="https://levreview.com" target="_blank">LevReview</a> was built to help local businesses get better reviews on Google. </li>
            <li> <a href="https://gettjalerts.com" target="_blank">TJ Alerts</a> helps you stay on top of new jobs in the tech market. </li>
          </ul>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-900 prose-indigo">
          <h2>Past</h2>
          <ul>
            <li> <a href="https://github.com/rasulkireev/awesome-basb" target="_blank">Awesome BASB</a> a collection of Awesome "Building a Second Brain" resources. </li>
            <li><a href="https://opensea.io/collection/cistercian-date-club" target="_blank">Cistercian Date Club</a> is an NFT collection that allows you to own a piece of history by owning a unique date.</li>
            <li> <a href="https://otbchess.org" target="_blank">OTBChess</a> - Community for people who like to play chess in real life. </li>
            <li> <a href="https://github.com/rasulkireev/joplin-parse" target="_blank">Joplin Parse</a> is a Python library that helps you parse your Joplin notes in a format that can be used in a static site builder. </li>
            <li><a href="https://github.com/rasulkireev/kushim" target="_blank">Kushim</a> is an Open Source Life Management Tool I built as my first Django SaaS. This project didn't "get anywhere", but I learnt a ton! Still use some of the code I've written back then.</li>
            <li><a href="https://tolstoy-newsletter.herokuapp.com" target="_blank">Tolstoy Newsletter</a> is an automated newsletter that sends you a quote from Tolstoy Calendar every day.</li>
            <li><span>Shop for Dev</span> was a small shopify store where people could buy merchendise from popular open source projects, Ruby on Rails, for example. I always asked for permission to use the logos and shared profits with creators. Too bad, we didn't make a single sale.</li>
            <li><span>OSAR Journal</span>. Second website I built (with Wordpress). The idea was to use Ray Dalio's believability principle on Research Papers. Essentially the idea is to open source all the research papers and let people vote on the best. Didn't work out.</li>
            <li><span>Your Guides to Life</span>is the first website I've built (with Wordpress) after reading the 4 Hour Workweek. I wanted to write cool and interesting guides for different areas of life and charge people to read this. Not enough traffic and any Wordpress plugin costed big $$$, so decided to drop and focus on learning coding.</li>

          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects',
    description: "List of Rasul's Current and Past Projects.",
    link: [
        { rel: "canonical", href:  `https://rasulkireev.com/projects` },
    ],
  }
}
</script>
