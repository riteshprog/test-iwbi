<template>
  <div v-if="features" class="glossarize">
    <!-- Overview section start here -->
    <section class="bg-white p-4 shadow-sm">
      <div v-if="features.intervention">
        <h4 class="mb-2 font-bold text-sm text-gray-100 uppercase">
          {{ $t('intervention') }}
        </h4>
        <p
          class="text-gray-50 font-light glossarize"
          v-html="addCitations(features.intervention)"
        ></p>
      </div>
      <div v-if="!innovationFeature && showCollapse" class="space-y-4 mt-4">
        <div v-if="features.issue">
          <h4 class="mb-2 font-bold text-sm text-gray-100 uppercase">
            {{ $t('issue') }}
          </h4>
          <p
            class="text-gray-50 font-light glossarize"
            v-html="addCitations(features.issue)"
          ></p>
        </div>
        <div v-if="features.evidence">
          <h4 class="mb-2 font-bold text-sm text-gray-100 uppercase">
            {{ $t('evidence') }}
          </h4>
          <p
            class="text-gray-50 font-light glossarize"
            v-html="addCitations(features.evidence)"
          >
            }
          </p>
        </div>
        <div v-if="features.impact" class="mt-6">
          <h4 class="mb-2 font-bold text-sm text-gray-100 uppercase">
            {{ $t('impact') }}
          </h4>
          <p
            class="text-gray-50 font-light glossarize"
            v-html="addCitations(features.impact)"
          ></p>
        </div>
      </div>
      <button
        v-if="!innovationFeature"
        class="text-blue-1300 mt-6 font-light"
        @click="showCollapse = !showCollapse"
      >
        {{ showCollapse ? $t('show_less') : $t('read_more') }}
      </button>
    </section>
    <!-- Requirements section start here -->
    <section id="requirements">
      <div class="md:flex my-4 md:my-8 px-4">
        <h3 class="text-gray-1200 font-medium uppercase opacity-80">
          {{ $t('feature_parts') }}
        </h3>
        <div class="inline-flex mt-2 md:my-0 ml-auto">
          <ButtonsToggle
            v-if="versions.type !== 'community'"
            :value="$store.state.partguidance"
            class="mr-2 cursor-pointer"
            @click.native="$store.commit('setPartguidance')"
          >
            <template #label>
              <span
                :class="
                  $store.state.partguidance
                    ? 'text-primary-600'
                    : 'text-gray-50'
                "
                >WELL Core</span
              >
            </template>
          </ButtonsToggle>
          <WButtonsBase
            v-if="
              versions &&
              versions.type !== 'wpr' &&
              versions.type !== 'v2-hsr' &&
              versions.type !== 'wer'
            "
            type="transparent"
            class="focus:outline-none text-blue-1300 font-light"
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
            <span v-else class="flex items-center">
              <WIconsBase icon="plus" /> {{ $t('expand_all') }}</span
            >
          </WButtonsBase>
        </div>
      </div>
      <!-- parts div start here -->
      <WFeatureParts
        v-for="part in features.parts"
        :id="part.name"
        :key="part.id"
        :part="part"
        :parts="features.parts"
        :show-part-name="
          versions.type !== 'wpr' &&
          versions.type !== 'v2-hsr' &&
          versions.type !== 'wer'
            ? true
            : features.parts.length > 1
            ? true
            : false
        "
        class="mt-2 md:mt-4 bg-white"
      />
    </section>
    <!-- references section start here -->
    <LazyAccordiansBase
      v-if="versions.type === 'v2' && features.citations !== null"
      :expandable="expandable"
      headerclass="border-b border-gray-900"
      class="mt-4 mx-4 md:mx-0"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h4
            class="font-medium text-gray-1200 text-lg capitalize leading-5 flex my-2"
          >
            {{ $t('references') }}
          </h4>
          <WIconsBase icon="chevron-down" />
        </div>
      </template>
      <template #content>
        <p
          class="break-words text-gray-50 font-light"
          v-html="features.citations"
        ></p>
      </template>
    </LazyAccordiansBase>
  </div>
  <div v-else class="h-screen flex items-center">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      currentConcept: this.$route.params.conceptName,

      showCollapse: false,
    }
  },
  computed: {
    ...mapState({
      expandable: (state) => state.settings.expandable,
      versions: (state) => state.standard.versions,
      features: (state) => state.standard.features,
      citations: (state) => state.standard.citations,
    }),
    innovationFeature() {
      return (
        this.currentConcept === 'innovation' ||
        this.currentConcept === 'innovations'
      )
    },
  },

  methods: {
    addCitations(fieldText) {
      fieldText = fieldText.replace(/&(nbsp);/g, ' ')
      fieldText = fieldText.replace(/<span>/g, '')
      fieldText = fieldText.replace(/<\/span>/g, '')
      fieldText = fieldText.replace(/CIT:/g, '')
      const pattern = /(<sup>(\[\d*(,*\d*-*\d*)*\])<\/sup>)/g
      const temp = fieldText.match(new RegExp(pattern.source, pattern.flags))
      if (temp) {
        const result = fieldText
          .match(new RegExp(pattern.source, pattern.flags))
          .map((match) => new RegExp(pattern.source, pattern.flags).exec(match))
        for (let i = 0; i < result.length; i++) {
          if (result[i] !== null) {
            const oldMatch = result[i][2]
            let newResult = oldMatch.replace('[', '')
            newResult = newResult.replace(']', '')
            newResult = newResult.split(',')
            for (let j = 0; j < newResult.length; j++) {
              if (!newResult[j].includes('-')) {
                this.citations.forEach((citItem) => {
                  if (parseInt(citItem.id) === parseInt(newResult[j])) {
                    newResult[j] = citItem.sequence
                  }
                })
              } else {
                let stringWithHyphen = newResult[j]
                const hyphenSplit = stringWithHyphen.split('-')
                for (let k = 0; k < hyphenSplit.length; k++) {
                  this.citations.forEach((index, citItem) => {
                    if (parseInt(citItem.id) === parseInt(hyphenSplit[k])) {
                      hyphenSplit[k] = citItem.sequence
                    }
                  })
                }
                stringWithHyphen = hyphenSplit.join('-')
                newResult[j] = stringWithHyphen
              }
            }
            newResult = newResult.join(',')
            newResult =
              '[<a class="citation-link text-primary-1300" href="#" @click="actionA()">' +
              newResult +
              '</a>]'
            fieldText = fieldText.replace(oldMatch, newResult)
          }
        }
      }

      return this.unitFilter(fieldText)
    },
    unitFilter(data) {
      let e = data
      const b = e.match(/{{well-unit}}(.*?){{\/well-unit}}/g)
      if (this.$store.state.country_code === null) {
        this.$store.dispatch('getUserCountryByIP')
      }
      if (b && b.length) {
        b.forEach((element) => {
          const tagLength = element.length
          const tagIndex = e.indexOf('{{well-unit}}')
          let temp = element.replace(/{{\/?well-unit}}/g, '')
          temp = this.$store.state.unit
            ? temp.split('|')[0]
            : temp.split('|')[1]
          const firstString = e.slice(0, tagIndex)
          const secondString = e.slice(tagIndex + tagLength, e.length)
          e = firstString + temp + secondString
        })
      }
      return this.pointsFilter(e)
    },
    pointsFilter(data) {
      let e = data
      const b = e.match(/{{well-points}}(.*?){{\/well-points}}/g)
      if (this.$store.state.country_code === null) {
        this.$store.dispatch('getUserCountryByIP')
      }
      if (b && b.length) {
        b.forEach((element) => {
          const tagLength = element.length
          const tagIndex = e.indexOf('{{well-points}}')
          let temp = element.replace(/{{\/?well-points}}/g, '')
          temp = !this.$store.state.partguidance
            ? temp.split('|')[0]
            : temp.split('|')[1]
          const firstString = e.slice(0, tagIndex)
          const secondString = e.slice(tagIndex + tagLength, e.length)
          e = firstString + temp + secondString
        })
      }
      return e
    },
  },
}
</script>

<style scoped>
@layer base {
  >>> ol {
    list-style-type: auto;
    @apply pl-10;
  }
}
</style>
