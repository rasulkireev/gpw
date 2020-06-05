<template>

<div class="flex flex-row my-3 lg:flex-col">

  <div class="hidden p-1 lg:inline-block"><p class="text-sm">Share</p></div>    
  

  <!-- Sharingbutton Twitter -->
  <div class="inline-block p-1 mr-1 bg-blue-400">
    <a :href='"https://twitter.com/intent/tweet/?text=" + title + " @rasulkireev&amp;url=" + url' target="_blank" rel="noopener" aria-label="">
        <i class="text-white lab la-twitter"></i>
    </a>
  </div>

  <!-- Sharingbutton E-Mail -->
  <div class="inline-block p-1 mr-1 bg-gray-400">
    <a :href='"mailto:?subject=" + title + "&amp;body=" + text + " " + url' target="_self" rel="noopener" aria-label="">
      <i class="text-black las la-envelope"></i>
    </a>
  </div>

  <!-- Sharingbutton Reddit -->
  <div class="inline-block p-1 mr-1 bg-red-600">
    <a :href='"https://reddit.com/submit/?url=" + url + "&amp;resubmit=true&amp;title=" + title' target="_blank" rel="noopener" aria-label="">
      <i class="text-white la la-reddit"></i>
    </a>
  </div>
  
  <!-- Sharingbutton LinkedIn -->
  <div class="inline-block p-1 mr-1 bg-blue-700">
    <a :href='"https://www.linkedin.com/shareArticle?mini=True&amp;url=" + url + "&title=" + title + "&amp;summary=" + text' target="_blank" rel="noopener" aria-label="">
        <i class="text-white lab la-linkedin-in"></i>
    </a>
  </div>

  <!-- Sharingbutton Telegram -->
  <div class="inline-block p-1 mr-1 bg-blue-500">
    <a :href='"https://telegram.me/share/url?text=" + title + "&amp;url=" + url' target="_blank" rel="noopener" aria-label="">
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