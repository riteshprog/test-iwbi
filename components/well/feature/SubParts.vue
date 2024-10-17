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
      <div v-if="optionsCount == 1" class="flex flex-wrap">
        <div :class="[partHasVerificationMethods ? 'w-8/12' : 'w-full', 'p-4']">
          <strong v-if="option.space_property" class="block text-gray-50"
            >{{ option.space_property }}:</strong
          >
          <div
            v-if="notePosition(option) === 'top'"
            class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
          >
            <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
            <span
              class="text-primary-1300 font-light glossarize"
              v-html="addCitations(option.note)"
            >
            </span>
          </div>
          <p
            class="font-light text-gray-50 glossarize"
            v-html="addCitations(option.description)"
          ></p>
          <ol class="list-loweralpha font-light text-gray-50 space-y-2 pl-10">
            <li
              v-for="requirement in option.requirements"
              :key="requirement.id"
              class="glossarize"
              v-html="addCitations(requirement.description)"
            ></li>
          </ol>
          <div
            v-if="notePosition(option) === 'bottom'"
            class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
          >
            <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
            <span
              class="text-primary-1300 font-light glossarize"
              v-html="addCitations(option.note)"
            >
            </span>
          </div>
        </div>
        <div
          v-if="partHasVerificationMethods"
          :class="{ 'w-4/12': partHasVerificationMethods }"
          class="p-4"
        >
          <h5
            class="border-b border-primary-1300 font-medium mb-4 pb-2 text-primary-1300"
          >
            {{ $t('verification') }}
          </h5>
          <div
            v-if="part.letter_of_assurances.length > 0"
            class="mb-4 text-gray-50"
          >
            <h4 class="text-sm font-normal">
              {{ $t('Letters of Assurance') }}:
            </h4>
            <ul>
              <li
                v-for="loa in part.letter_of_assurances"
                :key="loa.id"
                class="text-sm text-gray-50 font-light"
              >
                {{ $t(loa.name) }}
              </li>
            </ul>
            <div v-if="$i18n.locale === 'en'" class="mt-1 flex space-x-4">
              <div v-for="(role, rIndex) in loaRoles" :key="rIndex">
                <a
                  v-if="hasLoaForRole(role)"
                  href="#"
                  class="capitalize font-light inline-flex items-center tetx-sm text-blue-1100 text-xs"
                  @click="downloadLoaForRole(part.id, role)"
                >
                  <WIconsBase icon="download" />{{ role }} LoA
                </a>
              </div>
            </div>
          </div>
          <div
            v-if="part.annotated_documents.length > 0"
            class="mb-4 text-gray-50"
          >
            <h4 class="text-sm">{{ $t('Annotated Documents') }}:</h4>
            <ul>
              <li
                v-for="doc in part.annotated_documents"
                :key="doc.id"
                class="text-sm text-gray-50 font-light"
              >
                {{ $t(doc.name) }}
              </li>
            </ul>
          </div>
          <div v-if="part.on_sites.length > 0" class="mb-4 text-gray-50">
            <h4 class="text-sm">{{ $t('On-Site Assessment') }}:</h4>
            <ul>
              <li
                v-for="site in part.on_sites"
                :key="site.id"
                class="text-sm text-gray-50 font-light"
              >
                {{ $t(site.name) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="subPart.condition === 'OR'">
          <div v-if="index == 0" class="space-y-4">
            <h5 class="font-medium text-gray-50 text-center text-xl mt-4">
              {{ $t('Choose between the following') }}:
            </h5>
            <div class="flex flex-wrap">
              <!-- eslint-disable-next-line -->
              <div
                v-for="(parts_options_array, index) in subPart.options"
                :key="index"
                :class="[
                  'w-6/12',
                  index % 2 == 0 ? 'border-r border-gray-1300 pr-4' : 'pl-4',
                ]"
              >
                <h4 class="text-primary-1300 font-medium italic mb-2">
                  {{
                    `${$t('Option')} ${parts_options_array.option_order}: ${
                      parts_options_array.name ? parts_options_array.name : ''
                    }`
                  }}
                </h4>
                <strong
                  v-if="parts_options_array.space_property"
                  class="block text-gray-50 mb-2"
                  >{{ parts_options_array.space_property }}:</strong
                >
                <div
                  v-if="parts_options_array.certification != null"
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
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
                  class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
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
                </div>
                <div
                  v-if="index !== subPart.options.length - 1"
                  class="text-center mt-2"
                >
                  <span
                    class="bg-gray-1400 inline-flex items-center justify-center px-1.5 rounded text-sm text-white uppercase"
                    >or</span
                  >
                </div>
              </div>
            </div>
            <div
              v-if="notePosition(option) === 'bottom'"
              class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
            >
              <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
              <span
                class="text-primary-1300 font-light glossarize"
                v-html="addCitations(option.note)"
              >
              </span>
            </div>
            <div
              v-if="partHasVerificationMethods"
              :class="{ 'w-full': partHasVerificationMethods }"
            >
              <h5
                class="border-b border-primary-1300 font-medium mb-4 pb-2 text-primary-1300"
              >
                {{ $t('verification') }}
              </h5>
              <div
                v-if="part.letter_of_assurances.length > 0"
                class="mb-4 text-gray-50"
              >
                <h4 class="text-sm font-normal">
                  {{ $t('Letters of Assurance') }}:
                </h4>
                <ul>
                  <li
                    v-for="loa in part.letter_of_assurances"
                    :key="loa.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(loa.name) }}
                  </li>
                </ul>
                <div v-if="$i18n.locale === 'en'" class="mt-1 flex space-x-4">
                  <div v-for="(role, rIndex1) in loaRoles" :key="rIndex1">
                    <a
                      v-if="hasLoaForRole(role)"
                      href="#"
                      class="capitalize font-light inline-flex items-center tetx-sm text-blue-1100 text-xs"
                      @click="downloadLoaForRole(part.id, role)"
                    >
                      <WIconsBase icon="download" />{{ role }} LoA
                    </a>
                  </div>
                </div>
              </div>
              <div
                v-if="part.annotated_documents.length > 0"
                class="mb-4 text-gray-50"
              >
                <h4 class="text-sm">{{ $t('Annotated Documents') }}:</h4>
                <ul>
                  <li
                    v-for="doc in part.annotated_documents"
                    :key="doc.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(doc.name) }}
                  </li>
                </ul>
              </div>
              <div v-if="part.on_sites.length > 0" class="mb-4 text-gray-50">
                <h4 class="text-sm">{{ $t('On-Site Assessment') }}:</h4>
                <ul>
                  <li
                    v-for="site in part.on_sites"
                    :key="site.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(site.name) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="index == 0">
            <!-- eslint-disable-next-line -->
            <div
              v-for="(parts_options_array, pIndex) in subPart.options"
              :key="pIndex"
              class="mt-4"
            >
              <div class="p-4 shadow bg-white border border-gray-400 rounded">
                <h4 class="text-primary-1300 font-medium italic mb-2">
                  {{
                    parts_options_array.space_property
                      ? parts_options_array.space_property
                      : ''
                  }}
                </h4>
                <div class="p-4 space-y-2">
                  <p
                    v-if="parts_options_array.space_property"
                    class="font-bold text-gray-50"
                    v-html="parts_options_array.space_property"
                  ></p>
                  <div
                    v-if="parts_options_array.certification != null"
                    class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
                  >
                    <span class="text-primary-1300">{{ $t('Note') }}:</span>
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
                      <span v-if="getCert(option.certification) === 'silver'">
                        对于选择本策略的项目，不管总得分是多少，
                        所能获得的最高WELL认证级别为银级。
                      </span>
                    </span>
                  </div>
                  <div
                    v-if="notePosition(parts_options_array) === 'top'"
                    class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
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
                  </div>
                </div>
              </div>
              <div
                v-if="notePosition(parts_options_array) === 'bottom'"
                class="border-l-4 border-gray-1400 pl-2 text-sm py-1 mb-4"
              >
                <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                <span
                  class="text-primary-1300 font-light glossarize"
                  v-html="addCitations(parts_options_array.note)"
                >
                </span>
              </div>
              <div
                v-if="pIndex !== subPart.options.length - 1"
                class="text-center mt-4"
              >
                <span
                  class="bg-gray-1400 inline-flex items-center justify-center px-1.5 rounded text-sm text-white uppercase"
                  >AND</span
                >
              </div>
            </div>
            <div v-if="partHasVerificationMethods" class="text-sm pl-4 mt-4">
              <h5
                class="border-b border-primary-1300 font-medium mb-4 pb-2 text-primary-1300"
              >
                {{ $t('verification') }}
              </h5>
              <div
                v-if="part.letter_of_assurances.length > 0"
                class="mb-4 text-gray-50"
              >
                <h4 class="text-sm font-normal">
                  {{ $t('Letters of Assurance') }}:
                </h4>
                <ul>
                  <li
                    v-for="loa in part.letter_of_assurances"
                    :key="loa.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(loa.name) }}
                  </li>
                </ul>
                <div v-if="$i18n.locale === 'en'" class="mt-1 flex space-x-4">
                  <div v-for="(role, rIndex2) in loaRoles" :key="rIndex2">
                    <a
                      v-if="hasLoaForRole(role)"
                      href="#"
                      class="capitalize font-light inline-flex items-center tetx-sm text-blue-1100 text-xs"
                      @click="downloadLoaForRole(part.id, role)"
                    >
                      <WIconsBase icon="download" />{{ role }} LoA
                    </a>
                  </div>
                </div>
              </div>
              <div
                v-if="part.annotated_documents.length > 0"
                class="mb-4 text-gray-50"
              >
                <h4 class="text-sm">{{ $t('Annotated Documents') }}:</h4>
                <ul>
                  <li
                    v-for="doc in part.annotated_documents"
                    :key="doc.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(doc.name) }}
                  </li>
                </ul>
              </div>
              <div v-if="part.on_sites.length > 0" class="mb-4 text-gray-50">
                <h4 class="text-sm">{{ $t('On-Site Assessment') }}:</h4>
                <ul>
                  <li
                    v-for="site in part.on_sites"
                    :key="site.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    {{ $t(site.name) }}
                  </li>
                </ul>
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
  props: {
    part: {
      type: Object,
      required: true,
    },
    subPart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      downloadLoaRequest: '',
      showAuthModal: false,
      hasAdminAccess: false,
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
    }),
    optionsCount() {
      return this.subPart.options.length
    },
    partHasVerificationMethods() {
      if (
        this.part.letter_of_assurances.length > 0 ||
        this.part.on_sites.length > 0 ||
        this.part.annotated_documents.length > 0
      ) {
        return true
      } else {
        return false
      }
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
    subPartEditLink() {
      if (process.client) {
        window.open(
          this.$config.adminUrl + 'resources/parts/' + this.part.id,
          '_blank'
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
    downloadLoaForRole(partId, roleType) {
      if (!this.currentUser) {
        const query = process.env.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
        return false
      } else {
        const url =
          process.env.apiUrl +
          'api/loaExport/part/' +
          partId +
          '/' +
          roleType +
          '?token=' +
          this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
        if (process.client) {
          window.open(url, '_blank')
        }
      }
    },
    hasLoaForRole(roleType) {
      if (this.part.letter_of_assurances.length > 0) {
        for (let i = 0; i < this.part.letter_of_assurances.length; i++) {
          if (
            this.part.letter_of_assurances[i].name
              .toLowerCase()
              .includes(roleType)
          ) {
            return true
          }
        }
      }
      return false
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
    getLoaNames(loa) {
      let str = ''
      if (loa && loa.length) {
        loa.forEach((element) => {
          if (this.isChinese) {
            str += element.chinese_name + ', '
          } else {
            str += element.name + ', '
          }
        })
        return str.slice(0, -2)
      }
    },
  },
}
</script>

<style scoped>
@layer base {
  >>> ul {
    @apply pl-10;
    list-style-type: auto;
  }
  >>> ul ul {
    @apply list-circle;
  }
  >>> ul ul ul {
    list-style-type: auto;
  }
  >>> ol ul {
    list-style-type: auto;
  }
  #requirements >>> a {
    @apply text-primary-1300;
  }
  >>> a {
    @apply text-primary-1300;
  }
}
</style>
