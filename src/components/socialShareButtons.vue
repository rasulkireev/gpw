<template>
<div class="my-3">
  <p class="block text-2xl font-bold lg:p-1 lg:text-sm lg:inline-block">Share</p>

  <div class="flex flex-row lg:flex-col">

    <!-- Sharingbutton Twitter -->
    <div class="inline-block p-1 mr-1 bg-blue-500">
      <a :href='"https://twitter.com/intent/tweet/?text=" + title + " @rasulkireev&amp;url=" + url' target="_blank" rel="noopener" aria-label="">
          <i class="text-white lab la-twitter"></i>
      </a>
    </div>

    <!-- Sharingbutton E-Mail -->
    <div class="inline-block p-1 mr-1 bg-black">
      <a :href='"mailto:?subject=" + title + "&amp;body=" + text + " " + url' target="_self" rel="noopener" aria-label="">
        <i class="text-white las la-envelope"></i>
      </a>
    </div>

    <!-- Sharingbutton Reddit -->
    <div class="inline-block p-1 mr-1 bg-red-600">
      <a :href='"https://reddit.com/submit/?url=" + url + "&amp;resubmit=true&amp;title=" + title + " by Rasul Kireev"' target="_blank" rel="noopener" aria-label="">
        <i class="text-white la la-reddit"></i>
      </a>
    </div>

    <!-- Sharingbutton LinkedIn -->
    <div class="inline-block p-1 mr-1 bg-blue-700">
      <a :href='"https://www.linkedin.com/shareArticle?mini=True&amp;url=" + url + "&title=" + title + " by Rasul Kireev" + "&amp;summary=" + text' target="_blank" rel="noopener" aria-label="">
          <i class="text-white lab la-linkedin-in"></i>
      </a>
    </div>

    <!-- Sharingbutton Telegram -->
    <div class="inline-block p-1 mr-1 bg-blue-500">
      <a :href='"https://telegram.me/share/url?text=" + title + " by Rasul Kireev" + "&amp;url=" + url' target="_blank" rel="noopener" aria-label="">
        <i class="text-white la la-telegram"></i>
      </a>
    </div>

    <!-- Sharingbutton Facebook -->
    <div class="inline-block p-1 mr-1 bg-blue-700">
      <a :href="'https://facebook.com/sharer/sharer.php?u=' + url" target="_blank" rel="noopener" aria-label="">
            <i class="text-white la la-facebook"></i>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    text: String
  }
}
</script>

<style>
i {
  font-size: 2.5rem;
}

a {
  border: 0;
}

a:hover {
  background-color: transparent;
  border-color: transparent;
}

</style>