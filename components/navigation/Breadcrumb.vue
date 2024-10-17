<template>
  <ul class="hidden md:flex text-gray-500 text-sm lg:text-base space-x-2">
    <li
      v-for="(link, index) in links"
      :key="index"
      class="font-light text-sm text-white uppercase"
    >
      <span>{{ link }}</span>
      <span v-if="index !== links.length - 1">/</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: false,
      default: null,
    },
  },
}
</script>

<style></style>
