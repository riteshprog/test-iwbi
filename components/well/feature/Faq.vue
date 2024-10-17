<template>
  <div v-if="faq" class="bg-white p-4">
    <LazyAccordiansBase
      v-for="equivalency in faq.data"
      :key="equivalency.id"
      class="mb-4 text-gray-50"
    >
      <template #header>
        <div class="bg-gray-1000 -m-4 p-4 text-15 flex">
          #{{ equivalency.id }}-
          <span class="ml-2" v-html="equivalency.question"></span>
        </div>
      </template>
      <template #content>
        <p class="font-light" v-html="equivalency.answer"></p>
      </template>
    </LazyAccordiansBase>
    <span class="text-gray-50 text-sm font-light text-gray-1100 leading-6">
      More questions? Take a look at the
      <a
        class="text-primary-500 font-medium"
        target="_blank"
        href="https://well.support/home~ae534dff-4934-4d6c-a21b-741c8b71aa11"
      >
        WELL knowledge base!</a
      >
    </span>
    <p v-if="!faq" class="font-sm text-yellow-500">
      There are no faq available for this feature.
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    featureId: {
      type: Number,
      require: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters('standard', ['fetchSingleData']),
    allFaq() {
      return this.$store.state.standard.faq
    },
    faq() {
      return this.fetchSingleData(this.featureId, this.allFaq)
    },
  },
  created() {
    this.$store.dispatch('standard/getFaq', this.featureId)
  },
}
</script>
