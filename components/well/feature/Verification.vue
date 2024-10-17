<template>
  <div>
    <div class="bg-white shadow rounded-sm p-4">
      <h4 class="text-gray-50 font-bold mb-4">Verification Methods</h4>
      <div class="mt-4 space-y-6 Glossarize">
        <div v-for="part in feature.parts" :key="part.id">
          <div v-if="partHasVerification(part)">
            <p
              v-if="
                versions.type !== 'v2-hsr' &&
                versions.type !== 'wpr' &&
                versions.type !== 'wer'
              "
              class="font-bold text-sm text-blue-500"
            >
              Part {{ part.part_number }} - {{ part.name }}
            </p>
            <ul class="-mt-3 text-gray-50 space-y-4">
              <li v-for="subPart in part.sub_parts" :key="subPart.id">
                <div v-if="subPartHasVerification(subPart)">
                  <h4 class="mb-4 font-medium">
                    {{ getSubPartTitle(subPart) }}
                  </h4>
                  <div
                    v-if="
                      subPart.options.filter((a) => a.verifications.length)
                        .length
                    "
                  >
                    <ul class="-mt-3 font-light leading-7">
                      <li
                        v-for="(options, index) in subPart.options.filter(
                          (a) => a.verifications.length
                        )"
                        :key="options.id"
                      >
                        <div v-if="options.verifications.length">
                          <span
                            v-if="
                              subPart.condition === 'OR' &&
                              subPart.options.length > 1
                            "
                            >Option {{ index + 1 }}: {{ options.name }} -
                            {{
                              getLoaNames(
                                options.verifications,
                                options.verification_condition
                              )
                            }}
                          </span>
                          <span v-else
                            >{{ options.name ? `${options.name}-` : null }}
                            {{
                              getLoaNames(
                                options.verifications,
                                options.verification_condition
                              )
                            }}</span
                          >
                          <div
                            v-if="options.verification_note"
                            class="ml-7"
                            v-html="addCitations(options.verification_note)"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="verificationCount && versions.type !== 'v2'">
          <h4 class="font-bold text-gray-50">Performance Testing</h4>
          <AccordiansBase
            v-for="pv in pvgbs"
            :key="pv.id"
            class="mb-2 border border-gray-900"
            headerclass="bg-gray-1000"
            bodyclass="border-t border-gray-900 space-y-2 p-6"
          >
            <template #header>
              <h4 class="text-blue-500 underline text-sm font-bold">
                {{ addCitations(pv.name) }}
              </h4>
              <h6 class="font-light text-xs text-gray-1100">
                Applies to Part {{ pv.part_number }}
              </h6>
            </template>
            <template #content>
              <div v-if="pv.concept_location || pv.pvgb_location_note">
                <h4 class="font-medium text-primary-1300">
                  Test Locations & Conditions
                </h4>
                <p
                  v-if="pv.concept_location"
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.concept_location)"
                ></p>
                <p
                  v-if="pv.pvgb_location_note"
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_location_note)"
                ></p>
              </div>
              <div v-if="pv.concept_test_method || pv.pvgb_test_method_note">
                <h6 class="font-medium text-primary-1300">Test Method</h6>
                <p
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.concept_test_method)"
                ></p>
                <p
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_test_method_note)"
                ></p>
              </div>
              <div v-if="pv.concept_quantity || pv.pvgb_quantity_note">
                <h6 class="font-medium text-primary-1300">Test Quantity</h6>
                <p
                  v-if="pv.concept_quantity"
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.concept_quantity)"
                ></p>
                <p
                  v-if="pv.pvgb_quantity_note"
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_quantity_note)"
                ></p>
              </div>
              <div v-if="pv.pvgb_reporting_compliance">
                <h6 class="font-medium text-primary-1300">
                  Reporting & Compliance
                </h6>
                <p
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_reporting_compliance)"
                ></p>
              </div>
              <div v-if="addCitations(pv.pvgb_laboratory_requirement)">
                <h6 class="font-medium text-primary-1300">
                  Laboratory Requirements
                </h6>
                <p
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_laboratory_requirement)"
                ></p>
              </div>
              <div
                v-if="
                  pv.pvgb_device_requirements || pv.concept_device_requirement
                "
              >
                <h6 class="font-medium text-primary-1300">
                  Device Requirements
                </h6>
                <p
                  v-if="pv.concept_device_requirement"
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.concept_device_requirement)"
                ></p>
                <p
                  class="text-gray-50 font-light"
                  v-html="addCitations(pv.pvgb_device_requirements)"
                ></p>
              </div>
              <div v-if="addCitations(pv.pvgb_alternative_requirements)">
                <h6 class="font-medium text-primary-1300">
                  Alternate Device Requirements & Protocol
                </h6>
                <p
                  class="text-gray-50 font-light"
                  v-html="pv.pvgb_alternative_requirements"
                ></p>
              </div>
            </template>
          </AccordiansBase>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['feature', 'concept'],
  computed: {
    ...mapState({
      versions: (state) => state.standard.versions,
    }),
    verificationCount() {
      let count = false
      if (this.feature !== undefined) {
        this.feature.parts.forEach((subprt) => {
          subprt.sub_parts.forEach((opt) => {
            opt.options.forEach((option, index) => {
              if (option.pvgbs.length) {
                count = true
              }
            })
          })
        })
      }
      return count
    },
    pvgbs() {
      const pvgb = []

      if (this.feature !== undefined) {
        this.feature.parts.forEach((part) => {
          part.sub_parts.forEach((opt) => {
            opt.options.forEach((option, index) => {
              if (option.pvgbs.length) {
                option.pvgbs.forEach((pv) => {
                  pvgb.push({
                    id: pv.id,
                    part_id: part.id,
                    part_number: part.part_number,
                    part_name: part.name,
                    name: pv.name,
                    concept_location: this.concept.location,
                    concept_quantity: this.concept.quantity,
                    concept_quantity_core: this.concept.quantity_core,
                    concept_recertification: this.concept.recertification,
                    concept_device_requirement: this.concept.device_requirement,
                    concept_test_method: this.concept.test_method,
                    pvgb_test_method_note: pv.test_method_note,
                    pvgb_reporting_compliance: pv.reporting_compliance,
                    pvgb_device_requirements: pv.device_requirements,
                    pvgb_alternative_requirements: pv.alternative_requirements,
                    pvgb_alternative_quantity: pv.alternative_quantity,
                    pvgb_quantity_override: pv.quantity_override,
                    pvgb_quantity_core_override: pv.quantity_core_override,
                    pvgb_recertification_override: pv.recertification_override,
                    pvgb_locations_override: pv.locations_override,
                    pvgb_quantity_note: pv.quantity_note,
                    pvgb_location_note: pv.location_note,
                    pvgb_laboratory_requirement: pv.laboratory_requirement,
                  })
                })
              }
            })
          })
        })
      }
      return pvgb
    },
  },
  methods: {
    addCitations(fieldText) {
      if (fieldText) {
        fieldText = fieldText.replace(/&(nbsp);/g, ' ')
        fieldText = fieldText.replace(/<span>/g, '')
        fieldText = fieldText.replace(/<\/span>/g, '')
        fieldText = fieldText.replace(/CIT:/g, '')
        const pattern = /(<sup>(\[\d*(,*\d*-*\d*)*\])<\/sup>)/g
        const temp = fieldText.match(new RegExp(pattern.source, pattern.flags))
        if (temp) {
          const result = fieldText
            .match(new RegExp(pattern.source, pattern.flags))
            .map((match) =>
              new RegExp(pattern.source, pattern.flags).exec(match)
            )
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
      }
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
    partHasVerification(part) {
      let show = false
      return part.sub_parts.map((subpart) => {
        subpart.options.forEach((opt) => {
          if (opt.verifications.length) {
            show = true
          }
          return show
        })
        return show
      })
    },
    subPartHasVerification(subpart) {
      let show = false
      return subpart.options.map((opt) => {
        if (opt.verifications.length) {
          show = true
        }
        return show
      })
    },
    getSubPartTitle(subpart) {
      let title = this.$i18n.t('For ')
      const spaceTypesInc = subpart.space_types_included
      const spaceTypesExc = subpart.space_types_excluded
      if (spaceTypesInc.length !== 0) {
        if (spaceTypesInc.length === 1) {
          title += this.$i18n.t(spaceTypesInc[0].name)
        } else {
          title += this.$i18n.t(spaceTypesInc[0].name)
          for (let i = 1; i < spaceTypesInc.length; i++) {
            if (i === spaceTypesInc.length - 1) {
              title += ' & ' + this.$i18n.t(spaceTypesInc[i].name)
            } else {
              title += ', ' + this.$i18n.t(spaceTypesInc[i].name)
            }
          }
        }
      }
      if (spaceTypesExc.length !== 0) {
        title += ' ' + 'except' + ' '
        if (spaceTypesExc.length === 1) {
          title += this.$i18n.t(spaceTypesExc[0].name)
        } else {
          title += this.$i18n.t(spaceTypesExc[0].name)
          for (let i = 1; i < spaceTypesExc.length; i++) {
            if (i === spaceTypesExc.length - 1) {
              title += ' & ' + this.$i18n.t(spaceTypesExc[i].name)
            } else {
              title += ', ' + this.$i18n.t(spaceTypesExc[i].name)
            }
          }
        }
      }
      return title
    },
  },
}
</script>

<style scoped>
@layer base {
  >>> ul {
    @apply space-y-2 list-disc pl-10;
  }
  >>> ul ul {
    @apply space-y-0 list-circle pl-10;
  }
  >>> ul ul ul {
    @apply space-y-0 pl-10;
    list-style: square;
  }
}
</style>
