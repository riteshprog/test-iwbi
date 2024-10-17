<template>
  <div
    v-if="terms.length"
    class="mt-2 md:mt-0 md:mx-4 overflow-y-auto flex-1 h-full md:pr-4"
  >
    <div class="bg-white p-5 mb-10">
      <h1 class="text-28 font-medium text-gray-50 leading-8">
        {{ $t('glossary') }}
      </h1>
      <hr class="my-4 border-gray-900" />
      <FormulateInput
        v-model="searchItem"
        type="text"
        :placeholder="$t('Search Glossary')"
      />

      <div class="overflow-x-auto mb-4">
        <table class="w-full border-gray-900 border">
          <thead>
            <tr v-if="categoryCount" class="leading-7 border-b border-gray-900">
              <th
                class="p-4 text-left text-gray-800 border-gray-900 border-r uppercase"
              >
                {{ $t('Term') }}
              </th>
              <th
                class="p-4 text-left text-gray-800 border-gray-900 border-r uppercase"
              >
                {{ $t('Definition') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(term, index) in filteredTerms"
              :key="index"
              class="p-4 font-thin text-gray-50 leading-7 border-b border-gray-900"
            >
              <td class="p-4 border-r border-gray-900 font-light">
                {{ term.term }}
              </td>
              <td class="p-4 border-r border-gray-900 font-light">
                {{ term.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="categoryCount == 0">
        <p class="pt-3 text-gray-50 font-light">
          No glossary terms found with the name
          <strong>{{ searchItem }}</strong
          >.
        </p>
      </div>
    </div>
  </div>
  <div
    v-else-if="count"
    class="h-screen flex items-center justify-center flex-1"
  >
    <LoadingSpinner />
  </div>
  <div v-else class="h-screen flex items-center w-full">
    <p class="mx-auto">There are no glossary terms available.</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'sidebar',
  data() {
    return {
      searchItem: '',
      count: null,
    }
  },
  computed: {
    ...mapState({
      terms: (state) => state.standard.terms,
      versions: (state) => state.standard.versions,
    }),
    filteredTerms() {
      if (this.searchItem === '') {
        return this.terms
      } else {
        const result = []
        for (let index = 0; index < this.terms.length; index++) {
          const termName = this.terms[index].term
          if (termName.toLowerCase().includes(this.searchItem.toLowerCase())) {
            result.push(this.terms[index])
          }
        }

        return result
      }
    },
    categoryCount() {
      return this.filteredTerms.length
    },
  },

  async created() {
    this.counting()
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      await this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
        conceptName: this.$route.params.conceptName,
      })
    }
    await this.$store.dispatch('standard/getGlossaryTerms', {
      versionType: this.versions.type,
      lang: this.$i18n.locale,
    })

    this.$store.commit('settings/setSidebarTab', 'glossary')
  },
  methods: {
    counting() {
      if (!this.terms.length) {
        this.count = true
        setTimeout(() => {
          this.count = false
        }, 5000)
      }
    },
  },
}
</script>
