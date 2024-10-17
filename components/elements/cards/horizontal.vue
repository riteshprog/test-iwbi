<template>
  <div
    class="border border-primary-200 flex flex-col items-center md:flex-row p-4 relative rounded-md shadow-lg hover:shadow-xl bg-primary-50 hover:bg-white"
  >
    <div v-if="thumbnail" class="w-1/12">
      <img
        v-if="thumbnail.includes('http')"
        :src="thumbnail"
        class="w-full rounded-t-md"
      />
      <img
        v-else
        :src="$config.assetsURL + thumbnail"
        class="w-full rounded-t-md"
      />
    </div>
    <slot name="image"></slot>
    <div
      class="md:border-l border-primary-600 flex flex-col items-center md:items-start md:ml-7 md:pl-5 py-2 md:w-6/12"
    >
      <div
        class="font-medium text-sm text-primary-700 group-hover:text-primary-600"
      >
        {{ heading }}
      </div>
      <div v-if="subHeading" class="text-primary-700 font-medium">
        <slot name="subHeading"></slot>
      </div>
      <div
        class="mt-1 text-xs text-primary-700 font-normal group-hover:text-primary-600"
      >
        {{ description }}
      </div>
    </div>
    <div class="md:ml-auto mx-auto md:mr-0">
      <slot />
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
      required: false,
      default: null,
    },
    subHeading: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
