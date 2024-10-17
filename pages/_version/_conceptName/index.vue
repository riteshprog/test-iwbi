<template>
  <div
    v-if="currentConcept"
    class="mb-10"
    @click="citationClickEvent({ e: $event, ele: $refs.citationsModal })"
  >
    <div v-for="concept in currentConcept" :key="concept.id">
      <div
        v-if="
          versions.type !== 'v2-hsr' &&
          versions.type !== 'wpr' &&
          versions.type !== 'wer'
        "
      >
        <HeroBase
          v-if="
            versions &&
            versions.type !== 'v2-hsr' &&
            versions.type !== 'wpr' &&
            versions.type !== 'wer'
          "
          :version="versions"
          :heading="concept.name"
          :icon="`${$config.s3Url}/${concept.icon}`"
          :src="`/well/concept-banner/${$t(
            concept.name.replace(/\s+/g, '-').toLowerCase()
          )}.png`"
        />
        <HeroBase
          v-else
          :style="{ background: getConceptColor(concept) }"
          :version="versions"
          sub-heading="WELL Health-Safety"
          :heading="concept.name"
        />
      </div>
      <div
        v-else
        class="p-4 mb-4"
        :style="{ background: getConceptColor(concept) }"
      >
        <div class="text-sm leading-6 text-white font-light uppercase">
          {{
            versions && versions.type === 'v2-hsr'
              ? 'WELL Health-Safety'
              : versions && versions.type === 'wpr'
              ? 'WELL Performance Rating'
              : versions && versions.type === 'wer'
              ? 'WELL Equity Rating'
              : ''
          }}
        </div>
        <div class="font-medium text-3xl leading-12 text-white font-museo-slab">
          {{ concept.name }}
        </div>
      </div>

      <div class="bg-white p-4">
        <div v-if="concept.intent">
          <div class="text-sm font-bold leading-6 text-gray-100 uppercase">
            {{ $t('intent') }}
          </div>
          <div
            class="text-base text-gray-50 leading-6 font-light glossarize"
            v-html="addCitations(concept.intent)"
          ></div>
        </div>
        <div
          v-if="concept.description"
          :class="
            versions.type !== 'v2-hsr' &&
            versions.type !== 'wpr' &&
            versions.type !== 'wer'
              ? 'mt-4'
              : 'p-4'
          "
        >
          <div class="text-sm font-bold leading-6 text-gray-100 uppercase">
            {{ $t('background') }}
          </div>
          <div
            class="text-base text-gray-50 leading-6 font-light glossarize"
            v-html="addCitations(concept.description)"
          ></div>
        </div>
        <div v-if="concept.note" class="mt-4">
          <div
            class="text-sm text-primary-1300 leading-6 font-light border-l-4 pl-2 border-gray-700 pb-6 glossarize"
            v-html="addCitations(concept.note)"
          ></div>
        </div>
      </div>
      <div class="mt-4">
        <LazyAccordiansBase
          v-if="versions.type === 'v2' && concept.citations !== null"
          :id="'conceptCitations-' + concept.id"
          :expandable="!expandable"
          headerclass="border-b border-gray-900"
          class="mt-4 mx-4 md:mx-0"
        >
          <template #header>
            <div class="flex justify-between">
              <h4
                class="font-medium text-gray-1200 text-lg capitalize leading-5 flex my-2"
              >
                {{ $t('references') }}
              </h4>
              <div><WIconsBase icon="chevron-down" /></div>
            </div>
          </template>
          <template #content>
            <p
              class="break-words text-gray-50 font-light"
              v-html="concept.citations"
            ></p>
          </template>
        </LazyAccordiansBase>
      </div>
      <div>
        <h4
          class="text-gray-50 font-medium text-lg leading-5 uppercase mt-8 mb-6"
        >
          {{ concept.name }} {{ $t('features') }}
        </h4>
        <div
          v-for="feature in concept.features"
          :key="feature.id"
          class="bg-white p-4 mb-4 border-l-4 border-primary-1300 md:mr-2"
          :style="{ borderColor: concept.color_max }"
        >
          <div
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
            <div>
              <div class="text-gray-50 text-sm font-thin leading-6 mb-0">
                {{ $t('Feature') }}
                {{ getFeatureCode(feature, concept) }}
              </div>
              <div>
                <span class="font-medium text-xl leading-9 text-gray-1200">
                  {{ feature.name }}
                </span>
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
                />
                <span
                  v-if="feature.sdgs.length"
                  class="flex flex-wrap space-x-2 ml-4 float-right"
                >
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
                      class="w-6"
                      @click="navtosdg()"
                    />
                  </button>
                </span>
              </div>
              <p
                class="text-sm text-gray-50 font-light leading-6"
                v-html="feature.intent"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <!-- citationsModal start here -->
      <FeedModal id="citationsModal" ref="citationsModal">
        <header class="border-b pb-2 mb-2 flex justify-between">
          <h6 class="text-xl">
            {{ activeConcept ? activeConcept.toUpperCase() : '' }} Citations
          </h6>
          <WIconsBase
            icon="close"
            class="cursor-pointer"
            @click.native="$refs.citationsModal.isHidden = true"
          />
        </header>
        <div>
          <ol class="list-decimal pl-4 text-sm">
            <li v-for="citation in citations" :key="citation.id">
              <p class="text-sm" v-html="citation.details"></p>
            </li>
          </ol>
        </div>
      </FeedModal>
      <!-- end here -->
    </div>
  </div>
</template>

<script>
import 'v-tooltip/dist/v-tooltip.css'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Concept',
  layout: 'sidebar',
  data() {
    return {
      currentTabs: 'Overview',
      activeConcept: this.$route.params.conceptName,
    }
  },
  computed: {
    ...mapState({
      versions: (state) => state.standard.versions,
      concepts: (state) => state.standard.concepts,
      expandable: (state) => state.settings.expandable,
      citations: (state) => state.standard.citations,
    }),
    currentConcept() {
      return this.concepts.filter(
        (x) => x.name.toLowerCase() === this.activeConcept
      )
    },
  },

  methods: {
    ...mapActions('standard/', ['getFeatures', 'citationClickEvent']),
    getTypeText(type) {
      if (type === 'O') {
        return this.$i18n.t('Optimization')
      } else {
        return this.$i18n.t('Precondition')
      }
    },
    navtosdg() {
      const url = 'https://www.wellcertified.com/sdgs'
      if (process.client) {
        window.open(url, '_blank')
      }
    },

    getFeatureCode(feature, concept) {
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
    getConceptColor(concept) {
      if (concept.color_max !== '' && concept.color_min !== '') {
        return (
          'linear-gradient(to bottom,' +
          concept.color_max +
          ', ' +
          concept.color_min +
          ')'
        )
      }
    },

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
    @apply pl-10;
    list-style: decimal;
  }
}
</style>
