<template>
  <div
    v-if="currentConcept"
    class="flex h-full flex-1 overflow-y-auto"
    @click="citationClickEvent({ e: $event, ele: $refs.citationsModal })"
  >
    <div class="hidden md:block md:w-3/12 overflow-y-auto mt-2 md:mt-0 ml-4">
      <div v-if="currentConcept.length">
        <div v-for="concept in currentConcept" :key="concept.name">
          <div
            v-if="
              versions.type !== 'v2-hsr' &&
              versions.type !== 'wpr' &&
              versions.type !== 'wer'
            "
          >
            <h6
              class="flex items-center text-gray-50 font-bold text-lg leading-8"
            >
              <img
                :src="`${$config.s3Url}/${concept.icon}`"
                alt=""
                class="w-10"
              />
              <span>{{ concept.name }}</span>
            </h6>
            <hr class="border-gray-700 mt-2" />
          </div>
          <ul class="text-gray-1200 list-none p-0">
            <li
              class="my-1 outline-none hover:border-gray-700 active:border-black active:text-black border-transparent border hover:border-current hover:bg-white hover:rounded-sm px-1 py-1 hover:text-blue-1000 font-medium text-13 leading-6"
              :class="
                concept.name.toLowerCase() === $route.params.conceptName &&
                !$route.params.featureId
                  ? 'bg-white rounded-sm border-transparent border px-1 py-1'
                  : ''
              "
            >
              <div>
                <div
                  class="cursor-pointer"
                  @click="
                    $router.push(
                      `/${$i18n.locale}/${
                        $route.params.version
                      }/${concept.name.toLowerCase()}`
                    )
                  "
                >
                  {{ $t('overview') }}
                </div>
              </div>
            </li>
            <li v-for="feature in concept.features" :key="feature.id">
              <LazyAccordiansBase2
                :feature-name="feature.name"
                :expandable="selectFeature"
                :label="feature.name"
                @select="selectParts"
              >
                <template #header>
                  <div
                    class="my-1 outline-none hover:border-gray-700 active:border-black active:text-black border-transparent border hover:border-current hover:bg-white hover:rounded-sm px-1 py-1 hover:text-blue-1000 leading-6 font-medium text-sm"
                    :class="
                      feature.feature_order ===
                      parseInt($route.params.featureId)
                        ? 'bg-white rounded-sm border-transparent border px-1 py-1'
                        : ''
                    "
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
                    <div class="flex">
                      <div
                        v-if="
                          versions.type !== 'v2-hsr' &&
                          versions.type !== 'wpr' &&
                          versions.type !== 'wer'
                        "
                        class="bg-gray-600 text-white flex items-center justify-center w-8 min-w-max p-2 mr-1 h-8 rounded-sm"
                      >
                        <span
                          v-if="feature.type === 'P'"
                          class="text-lg leading-5"
                          >P</span
                        >
                        <span
                          v-if="
                            feature.type === 'O' &&
                            ((!partguidance && versions.type === 'v2') ||
                              versions.type !== 'v2')
                          "
                          class="text-10 flex flex-col items-center justify-center leading-3"
                          >{{ feature.max_points }}<br />
                          <span v-if="feature.max_points <= 1">{{
                            $t('Pt')
                          }}</span>
                          <span v-else>{{ $t('Pts') }}</span>
                        </span>

                        <span
                          v-if="
                            feature.type === 'O' &&
                            partguidance &&
                            versions.type === 'v2'
                          "
                          class="text-10 flex flex-col items-center justify-center leading-3"
                          >{{ feature.max_core_points }}<br />
                          <span v-if="feature.max_core_points <= 1">
                            {{ $t('Pt') }} </span
                          ><span v-else>{{ $t('Pts') }}</span></span
                        >
                      </div>
                      <div
                        class="ml-1 flex items-center w-3/4 cursor-pointer"
                        @click="topFunction($event)"
                      >
                        <span
                          >{{ featureCode(feature, concept) }}&#160;{{
                            feature.name
                          }}</span
                        >
                      </div>
                      <div v-if="feature.gbd_exists" class="mt-1">
                        <WIconsBase icon="globe" />
                      </div>
                      <div
                        v-if="feature.sdgs.length"
                        class="flex items-start justify-center w-8 ml-auto mt-1.5"
                      >
                        <img
                          src="https://cdn.wellcertified.com/static/images/concept-icons/sdg-grey.svg"
                          alt=""
                          class="w-4"
                        />
                      </div>
                    </div></div
                ></template>
                <template #content>
                  <ul
                    v-if="features.parts.length > 1 && loading !== 'true'"
                    class="font-medium my-4 px-4 space-y-1 text-sm list-none"
                  >
                    <li
                      v-for="(part, part_index) in features.parts"
                      :key="part_index"
                      :data-name="part.name"
                      :class="partName === part.name ? 'text-blue-1000' : ''"
                      class="cursor-pointer hover:text-blue-1000"
                      @click="scrollView($event)"
                    >
                      {{ $t('part') }} {{ part.part_number }}:
                      {{ part.name }}
                    </li>
                  </ul>
                </template>
              </LazyAccordiansBase2>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      id="parentDiv"
      class="overflow-y-auto mt-2 md:mt-0 md:mx-4 flex-1 pl-4 md:pl-0 pr-4 overflow-x-hidden"
    >
      <nuxt-child />
    </div>
    <FeedModal id="citationsModal" ref="citationsModal">
      <header
        class="-mx-6 border-b border-gray-900 flex justify-between mb-2 pb-2 px-6"
      >
        <h6 class="text-xl text-gray-50 font-medium">
          {{ activeConcept ? activeConcept.toUpperCase() : '' }} Citations
        </h6>
        <WIconsBase
          icon="close"
          class="cursor-pointer"
          @click.native="$refs.citationsModal.isHidden = true"
        />
      </header>
      <div class="text-gray-50">
        <ol class="list-decimal pl-4 text-sm">
          <li
            v-for="citation in citations"
            :key="citation.id"
            class="mb-2 font-light"
          >
            <p class="text-sm" v-html="citation.details"></p>
          </li>
        </ol>
      </div>
    </FeedModal>
  </div>
  <div v-else class="h-screen flex items-center w-full">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'sidebar',
  data() {
    return {
      selectFeature: null,

      currentTabs: 'Overview',
      activeConcept: this.$route.params.conceptName,
      partName: '',
    }
  },
  computed: {
    ...mapState({
      versions: (state) => state.standard.versions,
      concepts: (state) => state.standard.concepts,
      features: (state) => state.standard.features,
      partguidance: (state) => state.partguidance,
      citations: (state) => state.standard.citations,
      loading: (state) => state.standard.loading,
    }),
    currentConcept() {
      return this.concepts.filter(
        (concept) => concept.name.toLowerCase() === this.activeConcept
      )
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
    }
    await this.$store.dispatch('standard/getGlossaryTerms', {
      versionType: this.versions.type,
      lang: this.$i18n.locale,
    })

    this.$store.dispatch(
      'standard/getCitations',
      this.$route.params.conceptName
    )
    this.$store.commit('settings/setSidebarTab', this.$route.params.conceptName)
  },

  methods: {
    ...mapActions('standard', ['citationClickEvent']),
    topFunction(event) {
      const parentDiv = document.getElementById('parentDiv')
      // const scrollDiv = document.getElementById(
      //   event.target.getAttribute('feature-name')
      // )
      parentDiv.scrollTop = 0
      this.partName = event.target.getAttribute('feature-name')
    },
    scrollView(event) {
      const parentDiv = document.getElementById('parentDiv')
      const scrollDiv = document.getElementById(
        event.target.getAttribute('data-name')
      )
      parentDiv.scrollTop = scrollDiv.offsetTop - 64
      this.partName = event.target.getAttribute('data-name')
    },
    featureCode(feature, concept) {
      let code = ''
      if (feature.feature_code === null) {
        code = concept.feature_prefix
        if (
          feature.feature_order < 10 &&
          this.versions.type !== 'v2-hsr' &&
          this.versions.type !== 'wpr'
        ) {
          code += '0' + feature.feature_order
        } else {
          code += feature.feature_order
        }
      } else {
        code = feature.feature_code
      }
      return code
    },
    selectParts(name) {
      this.selectFeature = name
    },
  },
}
</script>

<style lang="css">
#citationsModal a {
  word-break: break-all;
  color: rgb(64, 148, 176);
}
.glossary-term {
  border-bottom: 1px dotted #fff;
  font-weight: 500;
}
.tooltip {
  display: none;
  position: absolute;
  right: 0;
}

.has-tooltip:hover .tooltip {
  display: flex;
  z-index: 50;
}
</style>
