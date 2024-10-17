<template>
  <div v-if="resources">
    <div v-if="resources.data.length" class="py-4 mb-4 w-full">
      <div class="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        <div
          class="bg-white p-4 relative"
          v-if="resource.resource_type !== 'Sample Documentation'"
          v-for="resource in resources.data"
          :key="resource.id"
        >
          <a target="_blank" :href="resource.link" class="mb-8 block">
            <div class="mb-1 font-light">
              <div
                v-if="
                  resource.resource_type &&
                  resource.resource_type != 'IWBI Article'
                "
                class="text-sm font-light"
              >
                {{ resource.resource_type }}
              </div>
              <div
                v-if="
                  resource.resource_type &&
                  resource.resource_type === 'IWBI Article'
                "
                class="text-xs text-gray-1100"
              >
                Article
              </div>
            </div>
            <p
              v-if="resource.resource_title"
              class="font-medium text-gray-1600 text-lg pb-2"
            >
              {{ resource.resource_title }}

              <WIconsBase
                class="text-primary-1300 inline-block"
                icon="external"
              />
            </p>
            <p class="text-lg" v-if="resource.desc" v-html="resource.desc"></p>
          </a>
          <div
            v-clipboard:success="changeClipBoardMsg"
            v-clipboard:copy="resource.link"
            v-if="resource.link"
            class="flex absolute bottom-4"
          >
            <WIconsBase class="text-primary-1300 cursor-pointer" icon="copy" />
            <a type="navPrimary">
              <span class="text-blue-1100 cursor-pointer font-light text-15">
                Copy link</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="font-sm text-yellow-500 bg-white py-4 px-4">
      There are no resources available for this feature.
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: {
    featureId: {
      type: Number,
      require: true,
      default: null,
    },
    data() {
      return {
        clipboardMsg: 'Copy link ',
      }
    },
  },
  computed: {
    ...mapGetters('standard', ['fetchSingleData']),
    ...mapState({
      allResources: (state) => state.standard.resource,
    }),
    resources() {
      return this.fetchSingleData(this.featureId, this.allResources)
    },
    resourceCountZero() {
      return this.resource.data.length === 0 || this.resource.data === null
    },
  },
  created() {
    this.$store.dispatch('standard/getResources', this.featureId)
  },
  methods: {
    changeClipBoardMsg() {
      this.clipboardMsg = 'Copied!'
    },
    resetMsg() {
      this.clipboardMsg = 'Copy link'
    },
  },
}
</script>
