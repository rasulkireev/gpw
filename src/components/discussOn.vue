<template>
    <div v-if="twitterLink || hnLink || redditLink || indiehackersLink" class="my-4 text-gray-900 flex-root">
      <p class="mb-2 text-xl font-semibold text-gray-800">Discuss on</p>
      <div class="flex flex-row flex-wrap -m-2">
        <a
          v-if=twitterLink
          class="flex flex-row items-center px-3 py-2 m-2 space-x-2 bg-blue-500 rounded-lg hover:bg-blue-700"
          :href=twitterLink
          target="_blank"
        >
          <i class="text-3xl text-white lab la-twitter"></i>
          <span class="text-lg font-semibold text-white">Twitter</span>
        </a>

        <a
          v-if=hnLink
          class="flex flex-row items-center px-3 py-2 m-2 space-x-2 bg-yellow-600 rounded-lg hover:bg-yellow-700"
          :href=hnLink
          target="_blank"
        >
          <i class="text-3xl text-white lab la-hacker-news"></i>
          <span class="text-lg font-semibold text-white">HackerNews</span>
        </a>

        <a
          v-if=redditLink
          class="flex flex-row items-center px-3 py-2 m-2 space-x-2 bg-red-600 rounded-lg hover:bg-red-700"
          :href=redditLink
          target="_blank"
        >
          <i class="text-3xl text-white lab la-reddit"></i>
          <span class="text-lg font-semibold text-white">Reddit</span>
        </a>

        <a
          v-if=indiehackersLink
          class="flex flex-row items-center px-3 py-2 m-2 space-x-2 bg-blue-900 rounded-lg hover:bg-blue-700"
          :href=indiehackersLink
          target="_blank"
        >
          <!-- <i class="text-3xl text-white lab la-reddit"></i> -->
          <span class="text-lg font-semibold text-white">Indiehackers</span>
        </a>

      </div>
    </div>
</template>

<script>
export default {
  props: {
    twitterLink: String,
    hnLink: String,
    redditLink: String,
    indiehackersLink: String,
  }
}
</script>