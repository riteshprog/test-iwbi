<template>
  <div v-if="open" class="fixed inset-0 overflow-hidden z-20">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0 transition-opacity bg-gray-800 bg-opacity-75"
      ></div>
      <aside
        class="absolute inset-y-0 right-0 pl-10 max-w-sm md:max-w-full lg:max-w-full flex"
      >
        <div class="relative w-screen max-w-2xl">
          <div
            class="absolute left-0 top-4 -ml-7 md:-ml-8 lg:-ml-8 pr-2 flex sm:-ml-10 sm:pr-4"
          >
            <button
              aria-label="Close panel"
              class="text-gray-300 hover:text-white transition ease-in-out duration-150"
              @click="toggleOpen"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
          >
            <header class="p-4 bg-primary-800">
              <div class="flex flex-col items-start space-y-1">
                <h2
                  class="text-base md:text-sm xl:text-lg leading-7 font-bold text-primary-100"
                >
                  {{ title }}
                </h2>
                <slot name="subHeading" />
              </div>
            </header>
            <div
              class="text-white bg-concept-pattern px-6 py-6"
              :style="{ background: bgColor }"
            >
              <slot name="header" />
            </div>
            <div class="relative flex-1">
              <slot name="content" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: null,
    },
    description: {
      type: String,
      require: false,
      default: null,
    },
    bgColor: {
      type: String,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>
