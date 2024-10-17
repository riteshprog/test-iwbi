<template>
  <div>
    <div
      :class="[
        expanded ? 'h-auto' : 'lg:h-20 h-11 line-clamp-2 lg:line-clamp-4',
        'overflow-hidden',
      ]"
    >
      <p
        v-if="isHtml"
        :class="[!expanded && 'line-clamp-2 lg:line-clamp-4']"
        v-html="content"
      ></p>
      <p v-else :class="[!expanded && 'line-clamp-2 lg:line-clamp-4']">
        {{ content }}
      </p>
    </div>
    <div v-if="content.length > 400" class="mt-4">
      <WButtonsBase type="tooltip" @click.native="expanded = !expanded">
        {{ buttonText }}
      </WButtonsBase>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
      default: null,
    },
    isHtml: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      more: false,
      expanded: false,
    }
  },
  computed: {
    buttonText() {
      return this.expanded ? 'Read Less' : 'Read More'
    },
  },
}
</script>
