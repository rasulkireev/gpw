<template>
  <div id="app" class="container flex flex-col max-w-4xl px-5 mx-auto leading-relaxed md:mt-6">
    <header class="fixed top-0 left-0 z-10 w-full bg-white h-card" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <div class="flex flex-col justify-between max-w-4xl px-6 m-auto sm:flex-row md:h-24">
          <div class="flex flex-row items-center justify-between w-full h-16 md:h-24">
            <div class="brand">
              <g-link to="/" class="flex flex-row items-center u-url">
                <img class="w-8 h-8 mx-auto mr-2 rounded-lg shadow u-photo" src="https://avatars.githubusercontent.com/u/8257474">
                <span class="block text-xl font-semibold no-underline p-name u-url">Rasul Kireev</span>
              </g-link>
            </div>
            <button class="sm:hidden" @click="isOpen = !isOpen" type="button">
              <svg viewBox="0 0 100 50" width="30" height="30">
                <rect width="80" height="10"></rect>
                <rect y="20" width="80" height="10"></rect>
                <rect y="40" width="80" height="10"></rect>
              </svg>
            </button>
          </div>
            <nav v-bind:class="isOpen ? 'block' : 'hidden'" class="flex-col items-start justify-end flex-1 mt-0 mb-2 sm:flex sm:mx-0 sm:items-center sm:flex-row">
              <g-link to="/about" class="flex items-center w-full p-2 m-0 text-lg leading-tight text-left text-blue-700 rounded sm:w-auto sm:text-center hover:bg-gray-300">About</g-link>
              <g-link to="/blog" class="flex items-center w-full p-2 m-0 text-lg leading-tight text-left text-blue-700 rounded sm:w-auto sm:text-center hover:bg-gray-300">Blog</g-link>
              <a class="flex items-center w-full p-2 m-0 text-lg leading-tight text-left text-blue-700 rounded sm:w-auto sm:text-center hover:bg-gray-300" href="#">Now</a>
            </nav>
          </div>
      </header>

    <div class="mt-20">
      <slot/>
    </div>

      <footer class="flex flex-col items-center justify-between w-full h-16 md:flex-row md:h-20 pin-b">
        <div class="flex flex-row">
          <a class="flex items-center pr-2 m-0 leading-tight text-center text-gray-600" href="https://rasulkireev.com/rss.xml">RSS</a>
        </div>
        <div class="">
          <a class="text-blue-700" href="https://xn--sr8hvo.ws/%E2%9E%B0%F0%9F%8D%8A%E2%8F%AD/previous">←</a>
          An IndieWeb Webring 🕸💍
          <a class="text-blue-700" href="https://xn--sr8hvo.ws/%E2%9E%B0%F0%9F%8D%8A%E2%8F%AD/next">→</a>
        </div>
      </footer>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style src="../css/tailwind.css" />

