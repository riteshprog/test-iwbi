<template>
  <div
    v-if="features && loading !== 'true'"
    :key="$route.params.featureId"
    class="mb-10"
  >
    <!-- feature list start here -->
    <div class="relative w-full md:hidden mb-4">
      <FormulateInput
        v-model="selectedFeature"
        :options="featureList"
        type="select"
        placeholder="Select a feature"
      />
      <span
        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
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
    <!-- banner section start here -->
    <div
      :style="{ background: getConceptColor }"
      class="px-4 py-5 md:rounded-sm lg:flex flex-wrap space-y-4 lg:space-y-0"
    >
      <div class="lg:w-9/12 md:pr-6">
        <div class="md:inline-flex md:space-x-4 items-center">
          <ul
            class="pl-0 list-none flex flex-wrap text-xs space-x-2 font-light md:text-sm text-white uppercase leading-6"
          >
            <li
              v-if="
                versions.type === 'v2-hsr' ||
                versions.type === 'wpr' ||
                versions.type === 'wer'
              "
            >
              {{ $t('action_areas') }} /
            </li>
            <li
              v-if="
                versions.type !== 'v2-hsr' &&
                versions.type !== 'wpr' &&
                versions.type !== 'wer'
              "
            >
              {{ $t('concept') }} /
            </li>
            <li>{{ $route.params.conceptName }} /</li>
            <li>{{ $t('feature') }}</li>
            <li>
              {{ featureCode }}
            </li>
          </ul>
          <span
            v-if="
              versions.type !== 'v2-hsr' &&
              versions.type !== 'wpr' &&
              versions.type !== 'wer'
            "
            class="border-2 border-white px-2 text-white uppercase text-xs rounded-sm leading-5"
            >{{ getTypeText(features.type) }}</span
          >
        </div>
        <h4
          class="md:text-32 text-white font-medium text-28 mt-4 md:mt-0 font-museo-slab"
        >
          {{ features.name }}
        </h4>
        <p
          class="text-white leading-5 md:leading-7 font-thin text-sm md:text-base"
          v-html="features.intent"
        ></p>
      </div>
      <div class="flex flex-col items-start lg:items-end lg:w-3/12 lg:pl-10">
        <div>
          <div
            v-if="features.sdgs.length > 1"
            class="flex space-x-2 justify-end"
          >
            <button
              v-for="sdg in feature.sdgs"
              :key="sdg.id"
              v-tooltip.left-start="sdg.name"
            >
              <img
                :src="
                  `https://cdn.wellcertified.com/static/images/sdg-icons/` +
                  sdg.id +
                  `.png`
                "
                :alt="sdg.name"
                width="40"
                height="40"
                class="cursor-pointer"
                @click="navtosdg()"
              />
            </button>

            <!-- <img
              v-for="sdg in features.sdgs"
              :key="sdg.id"
              :src="
                `https://cdn.wellcertified.com/static/images/sdg-icons/` +
                sdg.id +
                `.png`
              "
              :alt="sdg.name"
              width="40"
              height="40"
              class="cursor-pointer"
              @click="navtosdg()"
            /> -->
          </div>
          <button
            v-if="features.sdgs.length === 1"
            v-tooltip.left-start="features.sdgs[0].name"
          >
            <img
              :src="
                `https://cdn.wellcertified.com/static/images/sdg-icons/` +
                features.sdgs[0].id +
                `.png`
              "
              width="40"
              class="float-right cursor-pointer"
              @click="navtosdg()"
            />
          </button>
        </div>
        <div
          v-if="
            features.type === 'O' &&
            versions.type !== 'v2-hsr' &&
            versions.type !== 'wpr'
          "
          :class="[
            'bg-white p-1 rounded-sm text-center inline-flex flex-col px-3',
            features.sdgs.length ? 'mt-2' : '',
          ]"
          :style="{ color: concept.color_min }"
        >
          <div class="font-light text-13">{{ $t('max') }}</div>
          <div v-if="!partguidance || ['wer', 'wpr'].includes(versions.type)">
            {{ features.max_points }}
            <!-- eslint-disable -->
            {{ features.max_points <= 1 ? $t('pt') : $t('pts') }}
          </div>
          <div v-else>
            {{ features.max_core_points }}
            {{ features.max_core_points <= 1 ? $t('pt') : $t('pts') }}
          </div>
        </div>
      </div>
      <a
        v-if="
          currentUser &&
          versions.type !== 'v2' &&
          versions.type !== 'v2-hsr' &&
          versions.type !== 'wpr' &&
          versions.type !== 'wer'
        "
        :href="featurePdfLink"
        target="_blank"
        class="flex items-center active:text-white font-light text-white hover:text-white transition duration-150 ease-in-out ml-auto"
        ><WIconsBase icon="download" class="mr-2" />Download</a
      >
    </div>
    <!-- end here -->
    <!-- tabs start here -->
    <div
      class="flex justify-between items-center"
      :class="expanded ? 'space-x-2' : ''"
    >
      <TabsHorizontal
        :key="$route.path"
        v-model="currentTab"
        :tabs="tabOptions"
        class="mb-4 md:my-4 overflow-x-auto"
        navclass="space-x-4 mb-1"
      />
      <!-- <a
        class="relative"
        :class="expanded ? 'mb-4' : ''"
        :href="`https://forum.wearewell.com/spaces/12725894/search?term=%23${featureCode}&filters=&sort=relevance&sort_order=desc`"
        target="blank"
        v-tooltip.left-start="'NEW: Discuss this feature \n in the WELL Forum.'"
      >
        <div class="pulse relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <circle
              cx="24.5"
              cy="24.5"
              r="23.5"
              stroke="url(#paint0_linear_1165_72)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1165_72"
                x1="49"
                y1="-31.6485"
                x2="8.58178"
                y2="85.1928"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.223167" stop-color="#985F8C" />
                <stop offset="0.46221" stop-color="#235075" />
                <stop offset="0.764043" stop-color="#2E7C8D" />
                <stop offset="1" stop-color="#27617C" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            class="absolute bottom-1 left-1"
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
          >
            <circle
              cx="20.5"
              cy="20.5"
              r="20.5"
              fill="url(#paint0_linear_1165_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1165_8"
                x1="41"
                y1="-26.4814"
                x2="7.18068"
                y2="71.2838"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.223167" stop-color="#985F8C" />
                <stop offset="0.46221" stop-color="#235075" />
                <stop offset="0.764043" stop-color="#2E7C8D" />
                <stop offset="1" stop-color="#27617C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <svg
          class="absolute bottom-3 left-3"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16H9V21L14 16H19C19.5304 16 20.0391 15.7893 20.4142 15.4142C20.7893 15.0391 21 14.5304 21 14V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16Z"
            fill="white"
          />
          <path
            d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a> -->
    </div>
    <!--  Overview tab start here-->
    <div :class="{ hidden: currentTab !== 'Overview' }">
      <WFeatureOverview :key="feature.id" :features="features" />
    </div>
    <!--  Alternatives tab start here-->
    <div :class="{ hidden: currentTab !== 'Alternatives' }">
      <WFeatureAlternatives :feature-id="features.id" :feature="feature" />
    </div>
    <!--  FAQ tab start here-->
    <div :class="{ hidden: currentTab !== 'FAQ' }">
      <WFeatureFaq :feature-id="features.id" />
    </div>
    <!--  Resource tab start here-->
    <div
      v-if="versions && versions.type !== 'v2'"
      :class="{ hidden: currentTab !== 'Resource' }"
    >
      <WFeatureResource :feature-id="features.id" />
    </div>
    <!--  Verification tab start here-->
    <div
      v-if="
        versions.type === 'v2' ||
        versions.type === 'v2-hsr' ||
        versions.type === 'wpr' ||
        versions.type === 'wer'
      "
      :class="{ hidden: currentTab !== 'Verification' }"
    >
      <WFeatureVerification :feature="features" :concept="concepts" />
    </div>

    <!-- end here -->
  </div>
  <div v-else class="h-screen flex items-center">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>

<script>
import 'v-tooltip/dist/v-tooltip.css'
import { mapState } from 'vuex'

export default {
  name: 'FeatureDetails',
  data() {
    return {
      baseUrl: 'https://v2-api.wellcertified.com',
      currentTab: 'Overview',
      selectedFeature: null,
    }
  },
  computed: {
    ...mapState({
      versions: (state) => state.standard.versions,
      concepts: (state) => state.standard.concepts,
      features: (state) => state.standard.features,
      citations: (state) => state.standard.citations,
      currentUser: (state) => state.authentication.currentUser,
      partguidance: (state) => state.partguidance,
      loading: (state) => state.standard.loading,
    }),
    expanded() {
      return this.$store.state.settings.navExpanded
    },
    featureList() {
      const options = []
      // eslint-disable-next-line array-callback-return
      this.concept.features.filter((concept) => {
        const option = {
          label: concept.name,
          value: concept.id,
        }
        options.push(option)
      })
      return options
    },
    featurePdfLink() {
      const link =
        process.env.apiUrl +
        'api/features/' +
        this.$store.state.standard.features.id +
        '/pdfExport?token=' +
        this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      return link
    },
    concept() {
      return this.concepts.filter(
        (x) => x.name.toLowerCase() === this.$route.params.conceptName
      )[0]
    },
    feature() {
      if (this.concept) {
        return this.concept.features.filter(
          (x) => x.feature_order === parseInt(this.$route.params.featureId)
        )[0]
      }
      return null
    },
    getConceptColor() {
      if (
        this.concept &&
        this.concept.color_max !== '' &&
        this.concept.color_min !== ''
      ) {
        return (
          'linear-gradient(to bottom,' +
          this.concept.color_max +
          ', ' +
          this.concept.color_min +
          ')'
        )
      }
      return null
    },
    featureCode() {
      let code = ''
      if (this.features.feature_code === null) {
        code = this.concept.feature_prefix
        if (
          this.features.feature_order < 10 &&
          this.versions.type !== 'v2-hsr' &&
          this.versions.type !== 'wpr'
        ) {
          code += '0' + this.features.feature_order
        } else {
          code += this.features.feature_order
        }
      } else {
        code = this.features.feature_code
      }

      return code
    },
    equivalencyCount() {
      return this.features.equivalency_count
    },
    faqCount() {
      return this.features.faq_count
    },
    resourceCount() {
      return this.features.resource_count
    },
    tabOptions() {
      const options = [
        { name: 'Overview', active: false, badgeCount: '' },
        {
          name: 'Alternatives',
          active: true,
          badgeCount: this.equivalencyCount,
        },
        { name: 'FAQ', active: true, badgeCount: this.faqCount },
      ]
      if (this.versions.type !== 'v2') {
        options.push({
          name: 'Resource',
          active: true,
          badgeCount: this.resourceCount,
        })
      }
      if (
        this.versions.type === 'v2' ||
        this.versions.type === 'v2-hsr' ||
        this.versions.type === 'wpr' ||
        this.versions.type === 'wer'
      ) {
        options.push({
          name: 'Verification',
          active: '',
          badgeCount: '',
        })
      }
      return options
    },
  },
  watch: {
    $route() {
      this.currentTab = 'Overview'
      this.$store.dispatch('standard/getFeatures', this.feature.id)
    },
    selectedFeature(value) {
      this.$store.dispatch('standard/getFeatures', value)
    },
    feature(newVal) {
      this.$store.dispatch('standard/getFeatures', newVal.id)
    },
  },
  async mounted() {
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      await this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
        currentConcept: this.$route.params.conceptName,
      })
      await this.$store.dispatch('standard/getFeatures', this.feature.id)
    }

    await this.$store.dispatch('standard/getFeatures', this.feature.id)
    setTimeout(() => {
      this.$glossary(
        document.getElementsByClassName('glossarize'),
        this.$store.state.standard.terms
      )
    }, 3500)
  },
  updated() {
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      this.$glossary(
        document.getElementsByClassName('glossarize'),
        this.$store.state.standard.terms
      )
    }
  },
  beforeDestroy() {
    this.$store.dispatch('standard/setConcepts', [])
    this.$store.dispatch('standard/setFeatures', null)
  },

  methods: {
    navtosdg() {
      const url = 'https://www.wellcertified.com/sdgs'
      if (process.client) {
        window.open(url, '_blank')
      }
    },
    getTypeText(type) {
      if (type === 'O') {
        return this.$i18n.t('Optimization')
      } else {
        return this.$i18n.t('Precondition')
      }
    },
    getFeatureTypeClass(type) {
      if (type === 'O') {
        return 'span-opt-alt'
      } else {
        return 'span-pre-alt'
      }
    },
  },
}
</script>
<style scoped>
.w-50 {
  max-width: 50px;
}
.pulse {
  -webkit-animation: pulse 1.5s infinite;
}
.pulse:hover {
  -webkit-animation: none;
}

@-webkit-keyframes pulse {
  0% {
    @include transform(scale(0.9));
  }
  70% {
    @include transform(scale(1));
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
  100% {
    @include transform(scale(0.9));
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}
</style>
