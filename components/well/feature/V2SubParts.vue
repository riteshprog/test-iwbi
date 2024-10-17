<template>
  <div v-if="subPart">
    <div class="w-32">
      <WButtonsBase
        v-if="hasAdminAccess"
        icon="pencil"
        target="_blank"
        @click.native="subPartEditLink"
        >Edit Part</WButtonsBase
      >
    </div>
    <div v-for="(option, index) in subPart.options" :key="index">
      <div v-if="optionsCount == 1">
        <div v-if="option.space_property">
          <strong>{{ option.space_property }}:</strong>
        </div>
        <div
          v-if="notePosition(option) === 'top'"
          class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
        >
          <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
          <span
            class="text-primary-1300 font-light glossarize"
            v-html="addCitations(option.note)"
          >
          </span>
        </div>
        <p
          class="font-light text-gray-50 mt-4 glossarize"
          v-html="addCitations(option.description)"
        ></p>
        <ol
          class="list-loweralpha font-light text-gray-50 space-y-2 space-y-2 pl-10"
        >
          <li
            v-for="requirement in option.requirements"
            :key="requirement.id"
            class="glossarize"
            v-html="addCitations(requirement.description)"
          ></li>
        </ol>
        <div v-if="option.verifications.length">
          <div
            class="border-l-4 border-tertiary-500 font-medium mt-8 mb-4 pl-2 text-gray-50 text-sm"
          >
            {{ $t('Verified by') }}
            {{
              getLoaNames(option.verifications, option.verification_condition)
            }}
          </div>
          <div
            v-if="
              $i18n.locale === 'en' &&
              versions &&
              (versions.type === 'wpr' ||
                versions.type === 'v2' ||
                versions.type === 'wer' ||
                versions.type === 'v2-hsr')
            "
          >
            <div v-for="(role, index1) in loaRoles" :key="index1">
              <div
                v-if="hasLoaForRole(option, role)"
                class="flex active:text-blue-500 font-medium text-blue-500 hover:text-blue-1100 transition duration-150 ease-in-out h-full cursor-pointer"
                @click="downloadLoaForRole(part.id, role)"
              >
                <WIconsBase icon="download" />
                Letter of Assurance -
                <span class="capitalize">{{ role }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="notePosition(option) === 'bottom'"
          class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
        >
          <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
          <span
            class="text-primary-1300 font-light glossarize"
            v-html="addCitations(option.note)"
          >
          </span>
        </div>
      </div>
      <div v-else>
        <div v-if="subPart.condition === 'OR'">
          <div v-if="index == 0">
            <h5 class="font-medium text-gray-50 text-center text-xl my-4">
              {{ $t('Choose between the following') }}:
            </h5>
            <div
              v-for="(parts_options_array, internal_index) in subPart.options"
              :key="internal_index"
            >
              <div
                class="p-4 shadow bg-white border border-gray-400 rounded mt-2 feature"
              >
                <h4 class="text-primary-1300 font-medium italic mb-2">
                  {{
                    `${$t('Option')} ${internal_index + 1}: ${
                      parts_options_array.name ? parts_options_array.name : ''
                    }`
                  }}
                </h4>
                <h6
                  v-if="parts_options_array.space_property"
                  class="font-light text-gray-50"
                >
                  {{ parts_options_array.space_property }}:
                </h6>
                <div
                  v-if="parts_options_array.certification != null"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-6"
                >
                  <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                  <span
                    v-if="$i18n.locale === 'en'"
                    class="text-primary-1300 font-light"
                  >
                    Projects pursuing this strategy are limited in WELL
                    Certification level to
                    <span>
                      {{ getCert(parts_options_array.certification) }} </span
                    >, regardless of total points achieved.
                  </span>
                  <span v-else class="text-primary-1300 font-light">
                    <span
                      v-if="
                        getCert(parts_options_array.certification) === 'gold'
                      "
                    >
                      对于选择本策略的项目，不管总得分是多少，
                      所能获得的最高WELL认证级别为金级。
                    </span>
                    <span
                      v-if="
                        getCert(parts_options_array.certification) === 'silver'
                      "
                    >
                      对于选择本策略的项目，不管总得分是多少，
                      所能获得的最高WELL认证级别为银级。
                    </span>
                  </span>
                </div>
                <div
                  v-if="notePosition(parts_options_array) === 'top'"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
                >
                  <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                  <span
                    class="text-primary-1300 font-light glossarize"
                    v-html="addCitations(parts_options_array.note)"
                  >
                  </span>
                </div>
                <p
                  class="font-light text-gray-50 glossarize"
                  v-html="addCitations(parts_options_array.description)"
                ></p>
                <ol
                  class="list-loweralpha font-light text-gray-50 space-y-2 pl-10"
                >
                  <li
                    v-for="requirement in parts_options_array.requirements"
                    :key="requirement.id"
                    class="glossarize"
                    v-html="addCitations(requirement.description)"
                  ></li>
                </ol>
                <div v-if="parts_options_array.verifications.length">
                  <div
                    class="border-l-4 border-tertiary-500 font-medium mt-8 mb-4 pl-2 text-gray-50 text-sm"
                  >
                    {{ $t('Verified by') }}:
                    {{
                      getLoaNames(
                        parts_options_array.verifications,
                        parts_options_array.verification_condition
                      )
                    }}
                  </div>
                  <div
                    v-if="
                      $i18n.locale === 'en' &&
                      versions &&
                      (versions.type === 'wpr' ||
                        versions.type === 'v2' ||
                        versions.type === 'wer' ||
                        versions.type === 'v2-hsr')
                    "
                  >
                    <div v-for="(role, index2) in loaRoles" :key="index2">
                      <div
                        v-if="hasLoaForRole(parts_options_array, role)"
                        class="flex active:text-blue-500 font-medium text-blue-500 hover:text-blue-1100 transition duration-150 ease-in-out h-full cursor-pointer"
                        @click="downloadLoaForRole(part.id, role)"
                      >
                        <WIconsBase icon="download" />
                        Letter of Assurance -
                        <span class="capitalize">{{ role }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="notePosition(parts_options_array) === 'bottom'"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
                >
                  <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                  <span
                    class="text-primary-1300 font-light glossarize"
                    v-html="addCitations(parts_options_array.note)"
                  >
                  </span>
                </div>
              </div>
              <div
                v-if="internal_index !== subPart.options.length - 1"
                class="text-center mt-2"
              >
                <span
                  class="bg-gray-1400 inline-flex items-center justify-center px-1.5 rounded text-sm text-white uppercase"
                  >or</span
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="index == 0">
            <h5 class="text-center text-xl text-gray-1200 font-medium">
              {{ $t('Meet the following') }}:
            </h5>
            <div
              v-for="(parts_options_array, internal_index) in subPart.options"
              :key="internal_index"
              class="mt-4"
            >
              <div class="p-4 shadow bg-white border border-gray-400 rounded">
                <h4 class="text-primary-1300 font-medium italic mb-2">
                  {{
                    `${internal_index + 1}: ${
                      parts_options_array.name ? parts_options_array.name : ''
                    }`
                  }}
                </h4>
                <span
                  v-if="parts_options_array.space_property"
                  class="text-gray-50"
                  v-html="parts_options_array.space_property"
                ></span>
                <div
                  v-if="parts_options_array.certification != null"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
                >
                  <strong class="text-primary-1300"
                    >{{ $t('Certification note') }}:</strong
                  >
                  <span
                    v-if="$i18n.locale === 'en'"
                    class="text-primary-1300 font-light"
                  >
                    Projects pursuing this strategy are limited in WELL
                    Certification level to
                    <span>
                      {{ getCert(parts_options_array.certification) }} </span
                    >, regardless of total points achieved.
                  </span>
                  <span v-else class="text-primary-1300 font-light">
                    <span
                      v-if="
                        getCert(parts_options_array.certification) === 'gold'
                      "
                    >
                      对于选择本策略的项目，不管总得分是多少，
                      所能获得的最高WELL认证级别为金级。
                    </span>
                    <span
                      v-if="
                        getCert(parts_options_array.certification) === 'silver'
                      "
                    >
                      对于选择本策略的项目，不管总得分是多少，
                      所能获得的最高WELL认证级别为银级。
                    </span>
                  </span>
                </div>
                <div
                  v-if="notePosition(parts_options_array) === 'top'"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1"
                >
                  <strong class="text-primary-1300"
                    >{{ $t('Certification note') }}:</strong
                  >
                  <span
                    class="text-primary-1300 font-light glossarize"
                    v-html="addCitations(parts_options_array.note)"
                  >
                  </span>
                </div>
                <p
                  class="text-gray-50 font-light glossarize"
                  v-html="addCitations(parts_options_array.description)"
                ></p>
                <div>
                  <ol
                    class="list-loweralpha font-light text-gray-50 space-y-2 pl-10"
                  >
                    <li
                      v-for="requirement in parts_options_array.requirements"
                      :key="requirement.id"
                      class="glossarize"
                      v-html="addCitations(requirement.description)"
                    ></li>
                  </ol>
                </div>
                <div v-if="parts_options_array.verifications.length">
                  <div
                    class="border-l-4 border-tertiary-500 font-medium mt-8 mb-4 pl-2 text-gray-50 text-sm"
                  >
                    {{ $t('Verified by') }}
                    {{
                      getLoaNames(
                        parts_options_array.verifications,
                        parts_options_array.verification_condition
                      )
                    }}
                  </div>
                  <div
                    v-if="
                      $i18n.locale === 'en' &&
                      versions &&
                      (versions.type === 'wpr' ||
                        versions.type === 'v2' ||
                        versions.type === 'wer' ||
                        versions.type === 'v2-hsr')
                    "
                  >
                    <div v-for="(role, index3) in loaRoles" :key="index3">
                      <div
                        v-if="hasLoaForRole(parts_options_array, role)"
                        class="flex active:text-blue-500 font-medium text-blue-500 hover:text-blue-1100 transition duration-150 ease-in-out h-full cursor-pointer"
                        @click="downloadLoaForRole(part.id, role)"
                      >
                        <WIconsBase icon="download" />
                        Letter of Assurance -
                        <span class="capitalize">{{ role }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="notePosition(parts_options_array) === 'bottom'"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mt-2"
                >
                  <strong class="text-primary-1300"
                    >{{ $t('Certification note') }}:</strong
                  >
                  <span
                    class="text-primary-1300 font-light glossarize"
                    v-html="addCitations(parts_options_array.note)"
                  >
                  </span>
                </div>
              </div>
              <div
                v-if="internal_index !== subPart.options.length - 1"
                class="text-center mt-4"
              >
                <span
                  class="bg-gray-1400 inline-flex items-center justify-center px-1.5 rounded text-sm text-white uppercase"
                  >AND</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h-screen flex items-center">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'V2subPart',
  // eslint-disable-next-line vue/require-prop-types
  props: ['part', 'subPart'],
  data() {
    return {
      hasAdminAccess: false,
      downloadLoaRequest: '',
      loaRoles: [
        'architect',
        'contractor',
        'mep',
        'owner',
        'engineer',
        'designer',
        'planner',
      ],
    }
  },
  computed: {
    ...mapState({
      citations: (state) => state.standard.citations,
      currentUser: (state) => state.authentication.currentUser,
      versions: (state) => state.standard.versions,
    }),
    optionsCount() {
      return this.subPart.options.length
    },
  },
  watch: {
    currentUser() {
      if (this.downloadLoaRequest !== '') {
        this.downloadLoaForRole(this.part.id, this.downloadLoaRequest)
        this.downloadLoaRequest = ''
      }
    },
  },
  mounted() {
    if (this.currentUser) {
      for (let i = 0; i < this.currentUser.role.length; i++) {
        const role = this.currentUser.role[i]
        if (role === 'admin') {
          this.hasAdminAccess = true
        }
      }
    }
  },
  methods: {
    hasLoaForRole(option, roleType) {
      if (option.verifications.length > 0) {
        for (let i = 0; i < option.verifications.length; i++) {
          if (
            option.verifications[i].name
              .toLowerCase()
              .includes('letter of assurance') &&
            option.verifications[i].name.toLowerCase().includes(roleType)
          ) {
            return true
          }
        }
      }
      return false
    },
    subPartEditLink() {
      if (process.client) {
        window.open(
          this.$config.adminUrl + 'resources/parts/' + this.part.id,
          '_blank'
        )
      }
    },
    downloadLoaForRole(partId, roleType) {
      const url =
        process.env.apiUrl + 'api/loaExport/part/' + partId + '/' + roleType
      if (process.client) {
        window.open(url, '_blank')
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
    getCert(certStr) {
      return certStr.toLowerCase()
    },
    notePosition(option) {
      const position = option.note_position_override
      if (option.note) {
        return position
      }
      return false
    },
    getLoaNames(loa, condition) {
      const value = condition === 'AND' ? ',' : 'OR'

      let str = ''

      if (loa && loa.length) {
        loa.forEach((element) => {
          if (this.$i18n.locale === 'cn') {
            str += element.chinese_name + ' ' + value + ' '
          } else {
            str += element.name + ' ' + value + ' '
          }
        })

        return str.slice(0, condition === 'AND' ? -2 : -3)
      }
    },
  },
}
</script>

<style scoped>
@layer base {
  >>> table > tbody {
    @apply border font-light border-gray-1300 !important;
  }

  >>> table > tbody > tr {
    @apply border font-light border-gray-1300 !important;
  }

  >>> table > tbody > tr > td {
    @apply border border-gray-1300 p-2.5 text-base font-light text-tertiary-1000 !important;
  }
  >>> ol ol {
    @apply pl-10;
  }
  >>> ol ol > li {
    @apply mb-2;
  }
  >>> ol {
    list-style-type: auto;
  }
  >>> a {
    @apply text-primary-1300;
  }
}
</style>
