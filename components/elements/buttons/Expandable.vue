<template>
  <div>
    <div class="relative" @click="$emit('select', item)">
      <svg
        :class="{
          'text-gray-400 rotate-90': isSelected,
          'text-gray-300': !isSelected,
        }"
        class="absolute right-0 h-5 w-5 transform mr-2 mt-2"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
      </svg>
      <slot />
    </div>
    <div class="px-2 z-50" :class="{ hidden: !isSelected }">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: String,
    selectedItem: String,
  },
  computed: {
    isSelected() {
      return this.item === this.selectedItem
    },
  },
}
</script>
