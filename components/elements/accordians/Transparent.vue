<template>
  <div>
    <header
      :class="[
        $attrs.headerclass != null ? $attrs.headerclass : 'cursor-pointer p-4',
      ]"
      @click="isExpanded = !isExpanded"
    >
      <slot name="header" />
    </header>
    <div
      v-if="isExpanded"
      :class="$attrs.bodyclass != null ? $attrs.bodyclass : 'p-4'"
    >
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
      type: Boolean,
      required: false,
      default: false,
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
