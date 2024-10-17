<template>
  <div class="bg-blue-200 p-4 rounded-sm">
    <header>
      {{ heading }}
    </header>
    <slot name="body" />
  </div>
</template>

<script>
export default {
  name: 'VerticalCard',
  props: {
    heading: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
