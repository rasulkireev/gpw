<template>
  <Layout>

    <div class="mx-auto mb-10 text-xl">
      <div>
        <h1 class="mt-0 mb-4 text-4xl font-bold md:mb-6 md:text-5xl">Hey, I'm Rasul</h1>
        <p class="mb-4 text-xl">
          Currently learning to build web apps, create beautiful visualizations and analyze large datasets. In constant beta mode. Trying to write about my learnings more often.
          <a class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600" href="{% url 'about' %}">Read More</a>
        </p>
        <p class="mb-4 text-xl">
          Also, check out a <a class="text-lg font-semibold text-blue-700 border-b-2 border-blue-200 hover:bg-blue-200 hover:border-blue-600" href="{% url 'favourites' %}">list of my favourite things</a>. Currently only podcast episodes.
        </p>
      </div>

      <div class="mb-4">
        <a rel="me" href="https://twitter.com/rasulkireev"><i class="text-3xl lab la-twitter"></i></a>
        <a rel="me" href="https://github.com/rasulkireev"><i class="text-3xl lab la-github"></i></a>
        <a rel="me" href="https://www.linkedin.com/in/rasul-kireev/"><i class="text-3xl lab la-linkedin-in"></i></a>
        <a rel="me" href="https://keybase.io/rasulkireev"><i class="text-3xl lab la-keybase"></i></a>
        <a rel="me" class="u-email" href="mailto:me@rasulkireev.com"><i class="text-3xl las la-at"></i></a>
      </div>

      <div class="p-4 mb-6 border-2 border-green-300 rounded">
        <p class="mb-2">
          Finally, consider signing up for my personal newsletter. I will update you on the latest articles and any interesting articles and resources I've encountered.
        </p>
      
        <div class="mb-2">
          <form id="" class="flex flex-col md:flex-row" method="post" enctype="multipart/form-data" action="">
            <input type="email" name="user_email" maxlength="254"
            class="w-full p-1 mb-2 leading-tight text-gray-800 bg-gray-200 border border-gray-500 rounded appearance-none md:h-10 focus:outline-none focus:bg-white md:w-64" 
            required="" id="id_user_email">

            <button class="w-full text-lg font-semibold text-center text-white no-underline bg-green-500 border border-green-500 rounded cursor-pointer md:ml-2 md:h-10 sm:w-32">
              Subscribe
            </button>
          </form>      
        </div>
      </div>

    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script> 