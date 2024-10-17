<template>
  <div v-if="equivalencies">
    <WButtonsBase type="navPrimary1" icon="plus" @click.native="submitToggle">
      <span class="hidden sm:block">Submit Equivalency Proposal</span>
    </WButtonsBase>
    <WFeedbackModal ref="modal" class="z-50 w-4/6 mx-auto">
      <div>
        <WEquivalenciesProposalEdit
          ref="proposal"
          :feature="feature"
          :feature-id="featureId"
        />
      </div>
    </WFeedbackModal>
    <div v-if="equivalencies.data.length">
      <div
        v-for="(equivalency, index) in equivalencies.data"
        :key="index"
        class="my-4 md:flex bg-white py-4"
      >
        <header
          class="px-4 bg-white text-primary-900 md:w-1/4 md:border-r md:border-gray-1300"
        >
          <div class="mb-1.5">
            <h6 class="text-base leading-7 text-blue-500 font-bold">
              {{ $dayjs(equivalency.approval_date).format('MMM DD, YYYY') }}
            </h6>
            <div class="text-sm tx-uppercase pt-1 -mt-1.5">
              <BadgeTextBadge
                v-if="equivalency.Approved"
                :value="'NOT APPROVED'"
                clasess="rounded bg-primary-400 text-11 font-bold"
              />
              <BadgeTextBadge
                v-else
                :value="' APPROVED'"
                clasess="rounded  bg-warning-800 text-11 font-bold"
              />
            </div>
          </div>
          <h4 class="font-light text-tertiary-1000 leading-9 text-2xl">
            {{ equivalency.strategy_number }}
          </h4>
        </header>
        <div
          class="px-4 text-15 font-light leading-14 text-tertiary-1000 md:w-3/4"
        >
          <h3 class="mb-2 text-base leading-6 text-tertiary-1000 font-bold">
            {{ equivalency.code }}
          </h3>
          <p v-html="equivalency.reason"></p>
          <p class="font-light text-xs text-tertiary-1000 leading-5 my-2">
            Parts:
            <strong class="font-bold text-xs text-tertiary-1000 leading-5">{{
              equivalency.parts
            }}</strong
            ><br />
            Applicable Region:
            <strong class="font-bold text-xs text-tertiary-1000 leading-5">{{
              getStrategyRegions(index)
            }}</strong>
          </p>
        </div>
      </div>
    </div>
    <div v-if="epCountZero" class="bg-white p-4 mb-4">
      <div class="text-yellow-500">
        There are no approved equivalencies for this feature.
      </div>
    </div>

    <!-- after login form here -->
    <!-- <WSlideoversOverlay
      ref="proposalEdit"
      title="Equivalencies Proposal"
      class="z-40"
    >
      <template #content>
        <div class="p-4">
          <WEquivalenciesProposalEdit
            :feature="feature"
            :feature-id="feature.id"
          />
        </div>
      </template>
    </WSlideoversOverlay> -->
    <!-- end here -->
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
    feature: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      type: '',
      currentConcept: this.$route.params.conceptName,
    }
  },
  computed: {
    ...mapGetters('standard', ['getConcept', 'fetchSingleData']),
    ...mapState({
      currentUser: (state) => state.authentication.currentUser,
    }),
    allEquivalencies() {
      return this.$store.state.standard.equivalencies
    },
    equivalencies() {
      return this.fetchSingleData(this.featureId, this.allEquivalencies)
    },
    concept() {
      return this.getConcept(this.currentConcept)
    },
    epCountZero() {
      return this.equivalencies.data.length === 0 || this.equivalencies === null
    },
    getType() {
      if (
        (this.feature.feature_order === 5 ||
          this.feature.feature_order === 4) &&
        this.concept.name.toLowerCase() === 'innovations'
      ) {
        return 'rating'
      } else {
        return 'ep'
      }
    },
  },
  created() {
    this.$store.dispatch('standard/getEquivalency', this.featureId)
  },
  methods: {
    submitToggle() {
      if (this.currentUser) {
        this.$refs.modal.isHidden = false
        this.$refs.proposal.forceReMount++
        this.$refs.proposal.$formulate.reset('proposal')
      } else {
        const currentPath = this.$route.path.substring(1)
        const query = process.env.appUrl
        window.location.href = `${this.$config.loginUrl}?redirect_to=${query}/${currentPath}`
      }
    },

    getStrategyRegions(index) {
      let regions = ''
      const regionKeys = Object.keys(
        this.equivalencies.data[index].applicable_location_name
      )
      for (let i = 0; i < regionKeys.length; i++) {
        regions +=
          this.equivalencies.data[index].applicable_location_name[
            regionKeys[i]
          ] + ', '
      }
      return regions.slice(0, -2)
    },
  },
}
</script>
