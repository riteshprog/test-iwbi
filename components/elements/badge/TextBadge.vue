<template>
  <span
    :class="clasess"
    class="inline-flex items-center justify-center px-2 text-white"
    >{{ value }}</span
  >
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: false,
      default: null,
    },
    clasess: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style></style>
