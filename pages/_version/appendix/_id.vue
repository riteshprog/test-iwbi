<template>
  <div
    v-if="appendices.length"
    class="md:flex h-full flex-1 overflow-y-auto"
    @click="citationClickEvent({ e: $event, ele: $refs.citationsModal })"
  >
    <div class="md:w-1/4 overflow-y-auto mt-2 md:mt-0 ml-0 md:ml-4">
      <div class="relative w-full md:hidden mb-4">
        <FormulateInput
          v-model="selectedAppendix"
          :options="appendixList"
          type="select"
          placeholder="Select an appendix"
          @click="fetchAppendix(selectedAppendix)"
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
      <div v-if="appendices" class="feature-list hidden md:block">
        <ul class="text-13 font-medium">
          <li
            v-for="appendix in appendices"
            :key="appendix.id"
            class="my-1 outline-none hover:border-gray-700 text-tertiary-1000 active:border-black active:text-tertiary-1000 border-transparent border hover:border-current hover:bg-white hover:rounded-sm px-1 py-1 hover:text-blue-1000 leading-5"
            :class="
              appendix.slug === $route.params.id
                ? 'border-current bg-white rounded-sm border-transparent border px-1 py-1'
                : ''
            "
            @click="fetchAppendix(appendix.id)"
          >
            <nuxt-link
              v-if="appendix.slug !== ''"
              class="w-full block"
              :to="`/${$i18n.locale}/${$route.params.version}/appendix/${appendix.slug}`"
              ><span>Appendices {{ appendix.sequence }}</span></nuxt-link
            >
            <nuxt-link
              v-if="appendix.slug == ''"
              class="nav-link w-full block"
              :to="`/${$i18n.locale}/${
                $route.params.version
              }/appendix/${appendix.sequence.toLowerCase()}`"
              >Appendices {{ appendix.sequence }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      v-if="appendixDetails.length"
      class="overflow-y-auto mt-2 md:mt-0 md:mx-4 flex-1 pl-4 md:pl-0 pr-4"
    >
      <h3
        class="p-5 bg-primary-1300 mb-4 text-28 text-white font-medium font-museo-slab leading-8"
      >
        Appendix {{ appendixDetails[0].sequence }}
      </h3>
      <div
        v-for="appdata in appendixDetails"
        :key="appdata.id"
        class="bg-white p-5 font-light text-base text-gray-50 appendix break-words mb-6 glossarize"
        v-html="addCitations(appdata.details)"
      ></div>
    </div>
    <FeedModal id="citationsModal" ref="citationsModal">
      <header
        class="-mx-6 border-b border-gray-900 flex justify-between mb-2 pb-2 px-6"
      >
        <h6
          v-if="appendixDetails.length"
          class="text-xl text-gray-50 font-medium"
        >
          {{ appendixDetails[0].concept.name }} Citations
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
  <div v-else-if="count" class="h-screen flex items-center w-full">
    <LoadingSpinner class="mx-auto" />
  </div>
  <div v-else class="h-screen flex items-center w-full">
    <p class="mx-auto">There are no Appendix available.</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'sidebar',
  data() {
    return {
      selectedAppendix: null,
      count: null,
    }
  },
  computed: {
    ...mapState({
      appendixDetails: (state) => state.standard.appendix_details,
      appendices: (state) => state.standard.appendices,
      versions: (state) => state.standard.versions,
      citations: (state) => state.standard.citations,
      terms: (state) => state.standard.terms,
    }),
    appendixList() {
      const options = []
      // eslint-disable-next-line array-callback-return
      this.appendices.filter((appendix) => {
        const option = {
          label: 'Appendix' + ' ' + appendix.sequence,
          value: appendix.id,
        }
        options.push(option)
      })
      return options
    },
  },
  async created() {
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      await this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
        currentConcept: this.$route.params.conceptName,
      })
    }
    if (!this.appendices.length) {
      this.$store.dispatch('standard/getAppendices', this.versions.id)
    }
    await this.$store.dispatch('standard/getGlossaryTerms', {
      versionType: this.versions.type,
      lang: this.$i18n.locale,
    })
  },
  mounted() {
    this.counting()
    this.$store.commit('settings/setSidebarTab', 'appendix')
    setTimeout(() => {
      if (this.$route.params.id !== undefined) {
        this.fetchAppendix(
          this.appendices.filter((a) => a.slug === this.$route.params.id)[0].id
        )
      } else {
        this.$router.push({
          name: this.$route.name,
          params: {
            id: this.appendices[0].slug,
          },
        })
        this.fetchAppendix(this.appendices[0].id)
      }
    }, 5000)
  },
  methods: {
    ...mapActions('standard', ['fetchAppendix', 'citationClickEvent']),
    counting() {
      if (!this.appendices.length) {
        this.count = true
        setTimeout(() => {
          this.count = false
        }, 5000)
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
  .appendix >>> p {
    @apply leading-7;
  }
  .appendix >>> a {
    @apply text-blue-1200;
    @apply font-light;
  }

  .appendix >>> table > tbody {
    @apply border;
    @apply border-tertiary-1000;
  }

  .appendix >>> table > tbody > tr {
    @apply border;
    @apply border-gray-1300;
  }

  .appendix >>> table > tbody > tr > td {
    @apply border;
    @apply border-gray-1300;
    @apply p-2.5;
    @apply text-base;
    @apply font-light;
    @apply text-tertiary-1000;
  }

  .appendix >>> ul > li {
    @apply text-base;
    @apply font-light;

    @apply leading-7;
    list-style-type: auto;
  }

  .appendix >>> ul {
    @apply pl-10;
  }

  .appendix >>> ol {
    @apply pl-10;
    list-style-type: auto;
  }
}
</style>
