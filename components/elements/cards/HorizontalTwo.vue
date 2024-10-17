<template>
  <div class="bg-white text-primary-900 flex flex-col">
    <div class="sm:flex flex-wrap p-4">
      <div v-if="thumbnail" class="bg-primary-900 rounded-md w-10 h-10">
        <img
          v-if="thumbnail.includes('http')"
          :src="thumbnail"
          class="filter brightness-0 invert"
        />
        <img
          v-else
          :src="$config.assetsURL + thumbnail"
          class="filter brightness-0 invert"
        />
      </div>
      <slot name="image"></slot>
      <div class="lg:flex text-primary-900 sm:ml-4 mt-4 sm:mt-0 flex-1">
        <div v-if="subTitle && title" class="flex-1">
          <h6 class="text-sm opacity-50">{{ subTitle }}</h6>
          <h4 class="text-xl capitalize font-bold">{{ title }}</h4>
        </div>
        <div v-if="$slots.body" :class="[bodyClasess, 'mt-4 md:mt-0']">
          <slot name="body" />
        </div>
      </div>
    </div>
    <footer v-if="$slots.footer" class="text-xs font-medium">
      <slot name="footer"></slot>
    </footer>
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
    title: {
      type: String,
      required: false,
      default: null,
    },
    subTitle: {
      type: String,
      required: false,
      default: null,
    },
    bodyClasess: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style></style>
