<template>
  <section
    v-if="versions && versions.version"
    class="mt-2 md:mt-0 md:mx-4 overflow-y-auto flex-1 h-full"
  >
    <div class="px-4 md:px-8">
      <div class="flex justify-center md:mb-8">
        <div>
          <div class="flex items-center justify-center">
            <img
              src="/images/v2-icon.png"
              class="w-5 h-5 mx-2 flex items-center"
              :alt="`WELL ` + versionName"
            />
            <span
              class="text-gray-50 text-28 leading-12 font-medium"
              role="heading"
              aria-level="2"
              >WELL {{ versionName }}</span
            >
          </div>
          <h1
            class="flex justify-center font-medium text-base md:text-4xl text-gray-800 leading-5 md:leading-11 font-museo-slab"
          >
            {{
              isRatingType
                ? $t('Action areas and Features')
                : $t('Concepts and Features')
            }}
          </h1>
          <div
            v-if="isRatingType"
            class="md:flex justify-center md:space-x-10 space-y-1 mb-3 mt-4 lg:mb-0 lg:space-x-24"
          >
            <div class="items-center md:justify-center space-x-2">
              <!-- Fixed action areas length -->
              <BadgeTextBadge
                :value="concepts.length - 1"
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7">{{
                $t('action_areas')
              }}</span>
            </div>
            <!-- <div class="items-center justify-center space-x-2">
              <BadgeTextBadge
                :value="
                  (versions.type === 'wpr' && '21') ||
                  (versions.type === 'wer' && '21') ||
                  (versions.type === 'v2-hsr' && '15')
                "
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7"
                >{{ $t('Features') }}
                <span v-if="$i18n.locale === 'en'">required</span></span
              >
            </div> -->
            <div class="items-center justify-center space-x-2">
              <BadgeTextBadge
                :value="totalOptimization"
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7"
                >{{ $t('Features') }}
                <span v-if="$i18n.locale === 'en'">available</span></span
              >
            </div>
          </div>
          <div
            v-else
            class="md:flex justify-center md:space-x-10 space-y-1 mb-3 mt-4 lg:mb-0 lg:space-x-24"
          >
            <div class="items-center md:justify-center space-x-2">
              <BadgeTextBadge
                :value="10"
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7">{{
                $t('Concepts')
              }}</span>
            </div>
            <div class="items-center justify-center space-x-2">
              <BadgeTextBadge
                :value="totalPreconditions"
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7"
                >{{ $t('Preconditions') }}
                <span v-if="$i18n.locale === 'en'">required</span></span
              >
            </div>
            <div class="items-center justify-center space-x-2">
              <BadgeTextBadge
                :value="totalOptimization"
                clasess="rounded-sm p-2 bg-white text-gray-300 font-medium leading-3"
              />
              <span class="text-base text-gray-50 font-light leading-7"
                >{{ $t('Optimizations') }}
                <span v-if="$i18n.locale === 'en'">available</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="hidden xl:flex space-y-4 xl:space-y-0">
        <!-- Badges start Here -->
        <div
          class="hidden md:flex space-x-10 md:mb-3 lg:mb-0 lg:space-x-6 ml-auto order-1"
        >
          <WButtonsBase
            type="transparent"
            class="focus:outline-none text-blue-1700 hover:text-blue-1200 text-base leading-7 normal-case font-light"
            @click.native="$store.commit('settings/setExpandable', !expandable)"
          >
            <span v-if="expandable" class="flex items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ $t('collapse_all') }}</span
            >
            <span v-else class="flex items-center"
              ><WIconsBase icon="plus" /> {{ $t('expand_all') }}</span
            >
          </WButtonsBase>
        </div>
        <!-- Badges end here -->

        <!-- Buttons Start Here -->
        <div
          v-if="
            versions.type !== 'v2-hsr' &&
            versions.type !== 'wpr' &&
            versions.type !== 'wer'
          "
          class="inline-flex space-x-4 md:space-x-0 space-y-2 sm:space-y-0"
        >
          <WButtonsBase
            :class="[
              activeFeaturesType === 'all'
                ? 'bg-gray-2000 shadow-md'
                : 'bg-gray-1100 hover:bg-gray-2100',
              ' hover:shadow-md px-6 text-white',
            ]"
            type="neutral"
            @click.native="setActiveFeatures('all')"
          >
            {{ $t('All Features') }}</WButtonsBase
          >
          <WButtonsBase
            :class="[
              activeFeaturesType === 'pre'
                ? 'bg-gray-2000 shadow-md'
                : 'bg-gray-1100 hover:bg-gray-2100',
              ' hover:shadow-md px-6 text-white',
            ]"
            type="neutral"
            @click.native="setActiveFeatures('pre')"
          >
            {{ $t('Preconditions') }}</WButtonsBase
          >
          <WButtonsBase
            :class="[
              activeFeaturesType === 'opt'
                ? 'bg-gray-2000 shadow-md'
                : 'bg-gray-1100 hover:bg-gray-2100',
              ' hover:shadow-md px-6 text-white',
            ]"
            type="neutral"
            @click.native="setActiveFeatures('opt')"
          >
            {{ $t('Optimizations') }}
          </WButtonsBase>
        </div>
        <!-- Buttons end here -->
      </div>
      <div class="space-y-4 mt-4 mb-6">
        <LoadingList v-if="!concepts.length" />
        <!-- Accordians start here -->
        <LazyAccordiansPrimary
          v-for="(concept, index) in concepts"
          :key="index"
          :expandable="expandable"
          :border-style="concept.color_max"
        >
          <template #header>
            <div
              class="items-center lg:flex"
              :style="{ color: concept.color_max }"
            >
              <button
                class="rounded-sm flex items-center space-x-2"
                tabindex="0"
                type="button"
              >
                <img
                  :src="`${$config.s3Url}/${concept.icon}`"
                  class="w-10 h-10"
                  :alt="concept.name"
                />
                <h4 class="text-xl capitalize font-medium font-museo-slab">
                  {{ concept.name }}
                </h4>
              </button>
              <!-- Row Preconditions / Optimizations Count Badges (non Rating) -->
              <button
                v-if="
                  versions.type !== 'v2-hsr' &&
                  versions.type !== 'wpr' &&
                  versions.type !== 'wer'
                "
                class="flex ml-0.5 md:ml-2.5 lg:ml-auto mt-2 lg:mt-0 text-gray-400 text-sm mr-0 md:mr-4"
                type="button"
                tabindex="0"
              >
                <span
                  v-if="
                    activeFeaturesType === 'all' || activeFeaturesType === 'pre'
                  "
                  class="text-sm leading-5 font-light text-gray-600 mr-2 md:mr-0"
                >
                  <BadgeTextBadge
                    :value="conceptTotalPreconditions[index].length"
                    clasess="rounded-sm h-6 w-6 md:w-8 bg-gray-1900 text-gray-300 text-xs md:mr-2 leading-3 font-medium"
                  />
                  {{ $t('Preconditions') }}
                </span>
                <span
                  v-if="
                    activeFeaturesType === 'all' || activeFeaturesType === 'opt'
                  "
                  class="text-sm leading-5 font-light text-gray-600"
                >
                  <BadgeTextBadge
                    :value="conceptTotalOptimization[index].length"
                    clasess="rounded-sm h-6 w-6 md:w-8 bg-gray-1900 md:ml-8 text-gray-300 text-xs md:mr-2 leading-3 font-medium"
                  />
                  {{ $t('Optimizations') }}
                </span>
              </button>
              <!-- Row Preconditions / Optimizations Count Badges (Rating) -->
              <button
                v-else
                class="flex ml-0.5 md:ml-2.5 lg:ml-auto mt-2 lg:mt-0 text-gray-400 text-sm mr-0 md:mr-4"
                type="button"
                tabindex="0"
              >
                <span
                  v-if="
                    (activeFeaturesType === 'all' ||
                      activeFeaturesType === 'pre') &&
                    conceptTotalPreconditions[index].length
                  "
                  class="text-sm leading-5 font-light text-gray-600 mr-2 md:mr-0"
                >
                  <BadgeTextBadge
                    :value="conceptTotalPreconditions[index].length"
                    clasess="rounded-sm h-6 w-6 md:w-8 bg-gray-1900 text-gray-300 text-xs md:mr-2 leading-3 font-medium"
                  />
                  {{ $t('Features') }}
                </span>
                <span
                  v-if="
                    (activeFeaturesType === 'all' ||
                      activeFeaturesType === 'opt') &&
                    conceptTotalOptimization[index].length
                  "
                  class="text-sm leading-5 font-light text-gray-600"
                >
                  <BadgeTextBadge
                    :value="conceptTotalOptimization[index].length"
                    clasess="rounded-sm h-6 w-6 md:w-8 bg-gray-1900 md:ml-8 text-gray-300 text-xs md:mr-2 leading-3 font-medium"
                  />
                  {{ $t('Features') }}
                </span>
              </button>
            </div>
          </template>

          <template #content>
            <div
              v-for="feature in concept.features"
              :key="feature.id"
              class="cursor-pointer"
              @click="
                $router.push(
                  `/${$i18n.locale}/${
                    $route.params.version
                  }/${concept.name.toLowerCase()}/feature/${
                    feature.feature_order
                  }`
                )
              "
            >
              <div
                v-if="getDisplayStatus(feature.type)"
                class="bg-blue-200 mb-4 rounded-sm shadow w-full"
              >
                <div class="md:flex justify-between px-4 py-1">
                  <!-- Mobile Device Only -->
                  <BadgeTextBadge
                    v-if="
                      versions.type !== 'v2-hsr' &&
                      versions.type !== 'wpr' &&
                      versions.type !== 'wer'
                    "
                    :value="$t(getTypeText(feature.type))"
                    :class="[
                      feature.type == 'O'
                        ? 'border-2 border-gray-1200 bg-gray-1200 text-white'
                        : 'border-2 border-gray-1200 bg-white text-gray-1200',
                      'uppercase text-xs leading-5 font-medium rounded-sm',
                    ]"
                    class="md:hidden"
                  />
                  <h2
                    class="text-gray-600 font-medium text-base leading-7 font-museo-slab"
                    :style="{ color: concept.color_max }"
                  >
                    <span class="mr-1">
                      {{ getFeatureCode(concept, feature) }}</span
                    >
                    {{ feature.name }}
                  </h2>
                </div>
                <div class="flex float-right md:-mt-5 ml-2 mr-4">
                  <div v-if="feature.sdgs.length" class="flex">
                    <button
                      v-for="sdg in feature.sdgs"
                      :key="sdg.id"
                      v-tooltip="sdg.name"
                    >
                      <img
                        :src="
                          `https://cdn.wellcertified.com/static/images/sdg-icons/` +
                          sdg.id +
                          `.png`
                        "
                        class="w-6 mr-1"
                      />
                    </button>
                  </div>
                  <BadgeTextBadge
                    v-if="
                      versions.type !== 'v2-hsr' &&
                      versions.type !== 'wpr' &&
                      versions.type !== 'wer'
                    "
                    :value="$t(getTypeText(feature.type))"
                    :class="[
                      feature.type == 'O'
                        ? 'border-2 border-gray-1200 bg-gray-1200 text-white'
                        : 'border-2 border-gray-1200 bg-white text-gray-1200',
                      'uppercase leading-5 rounded-sm font-medium text-10',
                    ]"
                    class="hidden md:block"
                  />
                </div>
                <p
                  class="text-xs text-gray-1100 font-light leading-4 px-4 pb-2"
                  v-html="feature.intent"
                ></p>
              </div>
            </div>
          </template>
        </LazyAccordiansPrimary>
        <!-- Accordians end here -->
      </div>
      <div class="pb-20 md:pb-8 px-4 md:px-0">
        <div class="w-52">
          <WButtonsBase
            v-if="versions.type !== 'v2'"
            type="gray"
            class="text-white"
            @click.native="downloadStandardPdf"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Export PDF standard</WButtonsBase
          >
          <WButtonsBase
            v-if="versions.type === 'v2'"
            type="gray"
            @click.native="$refs.modal.isHidden = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Download Standard PDF</WButtonsBase
          >
        </div>
        <WFeedbackModal ref="modal" class="z-50">
          <div class="flex justify-between">
            <div class="text-gray-50 text-xl font-medium leading-7">
              Download Standard PDF
            </div>
            <WIconsBase
              icon="close"
              class="ml-20"
              @click.native="$refs.modal.isHidden = true"
            />
          </div>
          <hr class="border-gray-700 mt-2 mb-4" />

          <div>
            <label class="font-light leading-7 text-base text-gray-50 mb-2"
              >Please select the standard:</label
            >
            <multiselect
              v-model="pointFilter"
              :multiple="false"
              :searchable="true"
              :hide-selected="false"
              :allow-empty="true"
              :show-labels="false"
              name="featureType"
              placeholder="Please Select standard"
              :options="['WELL Certification', 'WELL Core Certification']"
            >
            </multiselect>
          </div>
          <div class="mt-3">
            <label class="font-light leading-7 text-base text-gray-50 mb-2"
              >Please select the standard units you prefer:</label
            >
            <multiselect
              v-model="unitFilter"
              :multiple="false"
              :searchable="true"
              :hide-selected="false"
              :allow-empty="true"
              :show-labels="false"
              name="standardUnit"
              placeholder="Please standard units"
              :options="['Imperial', 'Metric']"
            >
            </multiselect>
          </div>
          <div class="ml-auto w-24 my-4">
            <WButtonsBase @click.native="exportV2Standard"
              >Download</WButtonsBase
            >
          </div>
        </WFeedbackModal>
        <div class="font-light text-13 leading-5 text-gray-1100">
          *Please note that you need to login to export the WELL v2 standard as
          PDF.
        </div>
      </div>
    </div>
  </section>
  <div v-else class="h-screen flex items-center w-full">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>

<script>
import 'v-tooltip/dist/v-tooltip.css'
import { mapState, mapGetters } from 'vuex'

export default {
  layout: 'sidebar',
  data() {
    return {
      activeFeaturesType: 'all',
      expanded: false,
      pointFilter: 'WELL Certification',
      unitFilter: 'Imperial',
    }
  },
  computed: {
    ...mapState({
      concepts: (state) => state.standard.concepts,
      expandable: (state) => state.settings.expandable,
      versions: (state) => state.standard.versions,
    }),
    splitName() {
      const currentName = this.versions.name
      const cName = currentName.split(',')
      return cName[0]
    },
    ...mapGetters('standard', [
      'totalPreconditions',
      'totalOptimization',
      'conceptTotalPreconditions',
      'conceptTotalOptimization',
      'getFeatureCode',
    ]),
    isRatingType() {
      return (
        this.versions?.type === 'wpr' ||
        this.versions?.type === 'v2-hsr' ||
        this.versions?.type === 'wer'
      )
    },
    versionName() {
      return this.versions.type !== 'v2-hsr' &&
        this.versions.type !== 'wpr' &&
        this.versions.type !== 'wer'
        ? 'v2'
        : this.versions.type === 'v2-hsr'
        ? 'Health-Safety Rating'
        : this.versions.type === 'wpr'
        ? 'Performance Rating'
        : this.versions.type === 'wer'
        ? 'Equity Rating'
        : ''
    },
  },
  mounted() {
    this.$store.commit('settings/setSidebarTab', 'concepts')
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
        currentConcept: this.$route.params.conceptName,
      })
    }
    this.$store.commit('settings/setExpandable', !this.expandable)
  },
  methods: {
    getTypeText(type) {
      if (type === 'O') {
        return this.$i18n.t('Optimization')
      } else {
        return this.$i18n.t('Precondition')
      }
    },
    setActiveFeatures(type) {
      this.activeFeaturesType = type
    },
    getDisplayStatus(type) {
      if (this.activeFeaturesType === 'all') {
        return true
      } else {
        if (this.activeFeaturesType === 'pre' && type === 'P') {
          return true
        }
        if (this.activeFeaturesType === 'opt' && type === 'O') {
          return true
        }
      }
      return false
    },
    downloadStandardPdf() {
      const token = this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      if (token !== undefined && token.length > 0) {
        const url =
          process.env.apiUrl +
          'api/' +
          this.versions.id +
          '/pdfExport?token=' +
          token
        if (process.client) {
          window.open(url, '_blank')
        }
      } else {
        const query = process.env.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
      }
    },
    exportV2Standard() {
      const token = this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      if (token !== undefined && token.length > 0) {
        const points =
          this.pointFilter === 'WELL Certification' ? 'certification' : 'core'
        const url =
          process.env.apiUrl +
          'api/' +
          this.versions.id +
          '/pdfExport?token=' +
          token +
          '&unitFilter=' +
          this.unitFilter.toLowerCase() +
          '&pointFilter=' +
          points
        if (process.client) {
          window.open(url, '_blank')
        }
      } else {
        const query = process.env.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
      }
    },
  },
}
</script>
