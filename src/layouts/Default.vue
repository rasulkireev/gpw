<template>
  <div id="app" class="flex flex-col max-w-4xl min-h-screen px-6 mx-auto leading-relaxed bg-white light-mode">
    <Navbar />
    
    <div class="my-10">
      <slot/>
    </div>

    <footer class="flex flex-col items-center justify-between w-full h-16 md:flex-row md:h-20 pin-b">
      <div class="flex flex-row">
        <a class="flex items-center pr-2 m-0 font-normal leading-tight text-center text-gray-600 border-0" href="https://rasulkireev.com/rss.xml">RSS</a>
      </div>

      <div class="">
        <a class="font-normal text-blue-700 border-0" href="https://xn--sr8hvo.ws/%E2%9E%B0%F0%9F%8D%8A%E2%8F%AD/previous">←</a>
        An IndieWeb Webring 🕸💍
        <a class="font-normal text-blue-700 border-0" href="https://xn--sr8hvo.ws/%E2%9E%B0%F0%9F%8D%8A%E2%8F%AD/next">→</a>
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
import Navbar from "../components/Navbar"

export default {
  data: () => ({
    navIsOpen: false,
    writingsIsOpen: false,
  }),

  components: {
    Navbar
  },
}
</script>