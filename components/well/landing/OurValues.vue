<template>
  <div>
    <div class="flex justify-center h-14 mb-3 p-1.5 rounded md:mx-px">
      <img :src="thumbnail" />
    </div>
    <slot name="image"></slot>
    <div class="text-primary-900 md:pb-4 text-center">
      <h4 class="text-xl leading-5 font-medium text-gray-300 mb-2">
        {{ heading }}
      </h4>
      <p class="font-light text-gray-50 leading-6">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: false,
      default: null,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
