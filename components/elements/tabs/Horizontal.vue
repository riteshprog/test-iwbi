<template>
  <div>
    <div class="md:hidden relative">
      <select
        v-model="currentTab"
        aria-label="Selected tab"
        class="
          text-blue-1500
          font-light
          leading-5
          form-select
          relative
          block
          w-full
          rounded-none
          bg-white
          focus:z-10
          transition
          ease-in-out
          duration-150
          text-sm
          py-2
          pl-2
          pr-6
          outline-none
        "
      >
        <option
          v-for="(tab, index) in tabs"
          :key="index"
          :selected="currentTab === tab.name"
          :value="tab.name"
        >
          {{ tab.name }}
        </option>
      </select>
      <span
        class="
          absolute
          inset-y-0
          right-0
          flex
          items-center
          pr-2
          pointer-events-none
          z-10
        "
      >
        <svg
          class="h-5 w-5 text-gray-400"
          x-description="Heroicon name: solid/selector"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
    <div class="hidden md:block">
      <nav :class="[$attrs.navclass != null ? $attrs.navclass : null, 'flex']">
        <WButtonsBase
          v-for="(tab, index) in tabs"
          :key="index"
          :type="value === tab.name ? tabClasses[0] : tabClasses[1]"
          :icon="tab.icon != null ? tab.icon : null"
          @click.native="currentTab = tab.name"
        >
          {{ tab.name }}
          <span
            v-if="tab.active"
            class="
              ml-1
              inline-flex
              items-center
              px-1.5
              ml
              rounded
              font-medium
              bg-primary-1300
              text-white text-xs
            "
          >
            {{ tab.badgeCount }}
          </span>
        </WButtonsBase>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    tabClasses: {
      type: Array,
      required: false,
      default() {
        return ['tabSelected', 'tab']
      },
    },
  },
  data() {
    return {
      currentTab: this.tabs[0].name,
    }
  },
  watch: {
    currentTab() {
      this.$emit('input', this.currentTab)
    },
  },
  created() {
    this.$emit('input', this.currentTab)
  },
}
</script>
