<template>
  <div>
    <header @click="open">
      <slot name="header" />
    </header>
    <div v-if="isSelected">
      <slot name="content" />
    </div>
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
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    isSelected() {
      return this.label === this.expandable
    },
  },
  methods: {
    open() {
      this.$emit('select', this.label)
    },
  },
}
</script>
