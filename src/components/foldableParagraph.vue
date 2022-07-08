<template>

    <div :class="isOpen ? 'block' : 'h-10'" class="flex flex-row">
      <button @click="isOpen = !isOpen" class="relative pl-4 border-l-4 border-blue-200 border-solid group hover:border-blue-500">
        <span v-if="isOpen" class="absolute z-10 invisible w-24 min-w-full text-center transform -rotate-90 bg-white border-2 rounded -left-20 top-8 group-hover:visible">fold me</span>
        <span v-if="!isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </span>
      </button>
      <div :class="isOpen ? 'block' : 'hidden'" class="-my-6">
        <slot></slot>
      </div>
    </div>

</template>

<script>
export default {
    data: () => ({
      isOpen: true,
    })
}
</script>