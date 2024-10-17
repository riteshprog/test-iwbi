<template>
  <section
    class="flex flex-wrap mb-4 overflow-hidden px-10 py-12 md:py-24 relative rounded w-full"
  >
    <div class="absolute top-2 md:top-4 left-4 text-white z-20">
      <div v-if="heading" class="uppercase text-base font-light">
        FEATURES / {{ heading }}
      </div>
    </div>
    <div class="absolute top-2 md:top-4 right-4 text-white z-20">
      <img
        v-if="icon"
        class="w-9 h-9 bg-white rounded-full"
        :src="`${icon}`"
        alt=""
      />
    </div>
    <img
      v-if="src"
      :alt="src"
      class="w-full object-cover h-full object-center block absolute inset-0"
      :src="src"
    />
    <div class="flex justify-center items-center z-10 w-full text-white">
      <span v-if="subHeading" class="text-lg">{{ subHeading }}</span>
      <h2
        v-if="heading"
        class="text-4xl lg:text-7xl uppercase font-bold mb-2 text-center"
      >
        {{ heading }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: null,
    },
    heading: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    subHeading: {
      type: String,
      required: false,
      default: null,
    },
    version: {
      type: Object,
      required: false,
      default: null,
    },
  },
}
</script>

<style></style>
