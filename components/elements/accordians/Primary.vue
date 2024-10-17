<template>
  <div class="bg-white shadow rounded">
    <header
      :style="{
        borderColor: borderStyle,
      }"
      class="rounded border-2 border-primary-900 cursor-pointer px-4 py-2 md:py-4"
      @click="isExpanded = !isExpanded"
    >
      {{ label }}
      <slot name="header" />
    </header>
    <main v-if="isExpanded" class="p-4 md:p-6" role="presentation">
      <slot name="content" />
    </main>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false,
    },
    parentClass: {
      type: String,
      default: 'rounded-lg border-2 border-primary-900',
    },
    headerClass: {
      type: String,
      default: 'rounded-lg border-2 border-primary-900',
    },
    borderStyle: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  watch: {
    expandable(value) {
      this.isExpanded = value
    },
  },
  mounted() {
    this.isExpanded = this.expandable
  },
}
</script>
