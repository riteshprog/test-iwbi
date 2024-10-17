<template>
  <div class="flex items-center" @click=";(isActive = !isActive), analytics()">
    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
    <button
      type="button"
      class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      role="switch"
      :class="!isActive ? 'bg-gray-200' : 'bg-primary-600'"
      aria-checked="false"
    >
      <span class="sr-only">Use setting</span>
      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
      <span
        class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="!isActive ? 'translate-x-0' : 'translate-x-5'"
      >
        <!-- Enabled: "", Not Enabled: "" -->
        <span
          class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          :class="
            isActive
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in'
          "
          aria-hidden="true"
        >
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <!-- Enabled: "", Not Enabled: "" -->
        <span
          class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          ::class="isActive ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </button>
    <span class="ml-1 text-sm"> <slot name="label" /></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  watch: {
    isActive() {
      this.$emit('input', this.isActive)
    },
    value() {
      this.isActive = this.value
      this.$emit('input', this.isActive)
    },
  },
  created() {
    this.isActive = this.value
  },
  methods: {
    analytics() {
      if (
        process.client &&
        this?.$wind?.analytics &&
        this.$wind.analytics === true
      ) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'windEvent',
          category: 'Button click',
          action: this.$el.textContent,
          label: window.location.pathname,
        })
      }
      if (process.client && this?.$wind?.debug && this.$wind.debug === true) {
        // eslint-disable-next-line no-console
        console.log({
          event: 'windEvent',
          category: 'Button click',
          action: this.$el.textContent,
          label: window.location.pathname,
        })
      }
    },
  },
}
</script>
