<template>
  <div :class="['fixed z-30 inset-0 overflow-y-auto', { hidden: isHidden }]">
    <div
      :class="[
        'flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
      ]"
    >
      <div
        class="fixed inset-0 transition-opacity"
        @click="
          if (canManuallyClose) {
            isHidden = !isHidden
          }
        "
      >
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <div
        class="
          max-w-xl
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:p-6
          min
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    canManuallyClose: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  computed: {
    expanded() {
      if (this.$store.state.settings.navExpanded == null) {
        return true
      }

      if (this.$store.state.settings.navExpanded === 'false') {
        return false
      }

      if (this.$store.state.settings.navExpanded === 'true') {
        return true
      }

      return this.$store.state.settings.navExpanded
    },
  },
}
</script>
