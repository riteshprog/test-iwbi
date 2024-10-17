<template>
  <div v-if="versions">
    <div
      v-if="
        versions.type !== 'v2-hsr' &&
        versions.type !== 'wpr' &&
        versions.type !== 'wer'
      "
    >
      <LazyAccordiansBase
        :id="part.id"
        :expandable="expandable"
        bodyclass="border-t border-gray-1700"
      >
        <template #header>
          <h6 class="text-sm text-gray-1200 font-light">
            {{ $t('part') }} {{ part.part_number }}
          </h6>
          <h4
            class="font-medium text-gray-1200 text-lg capitalize leading-5 flex items-start"
          >
            {{ part.name }}
            <span
              v-if="features.type == 'O' && features.feature_code === null"
              class="ml-1"
              >{{ partPointsText }}</span
            >
            <div class="ml-auto inline-flex">
              <VTooltip v-if="part.gbd_exists">
                <WIconsBase icon="globe" @click.native.stop="showIhmeModal()" />
                <template #popper>
                  <div class="w-44 inline-flex flex-wrap p-2 text-sm">
                    This WELL part addresses a risk factor for which there is
                    data in the Global Burden of Disease (GBD) database. Click
                    to learn more.
                  </div>
                </template>
              </VTooltip>
              <span v-if="part.methods.length != 0">
                <img
                  v-for="(method, index) in part.methods"
                  :key="index"
                  :src="
                    '/static/images/methods/' +
                    method.name.toLowerCase() +
                    '-white.png'
                  "
                  :alt="method.name.toLowerCase() + '-white.png'"
                  width="40"
                  height="40"
                />
              </span>
            </div>
          </h4>
          <span
            v-if="partHasVerificationMethods && versions.type !== 'v2'"
            class="text-xs font-light text-gray-1200"
            >{{ $t('verified_by') }} {{ getPartVerificationMethods() }}</span
          >
        </template>
        <template #content>
          <div v-if="part.sub_parts.length > 1">
            <div class="border-t-4 border-gray-1700 mb-1">
              <TabsHorizontal
                v-model="currentTab"
                :tabs="getSubPartTitle(part.sub_parts)"
                :tab-classes="['blockTabSelected', 'blockTab']"
              />
            </div>
            <div class="p-4">
              <div
                v-for="(sub_part, sub_part_index) in part.sub_parts"
                :key="sub_part_index"
              >
                <div
                  v-if="
                    currentTab ===
                    getSubPartTitle(part.sub_parts)[sub_part_index].name
                  "
                >
                  <WFeatureV2SubParts
                    v-if="versions.type === 'v2'"
                    :sub-part="sub_part"
                    :part="part"
                  />
                  <WFeatureSubParts v-else :sub-part="sub_part" :part="part" />
                  <p
                    v-if="part.note"
                    class="border-l-4 border-gray-1400 pl-2 text-sm my-2 py-1"
                  >
                    <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                    <span
                      class="text-primary-1300 font-light glossarize"
                      v-html="addCitations(part.note)"
                    >
                    </span>
                  </p>
                  <CardsVertical
                    v-if="
                      part.part_guidances.length &&
                      partguidance &&
                      versions.type !== 'community'
                    "
                    class="mt-4 border-gray-900 border"
                  >
                    <template #body>
                      <h4 class="text-sm font-bold capitalize text-gray-50">
                        {{ $t('WELL Core Guidance') }}:
                      </h4>
                      <div
                        v-for="guidance in part.part_guidances"
                        :key="guidance.id"
                        class="text-sm text-gray-50 font-light"
                      >
                        <div v-if="guidance.rating_note">
                          <label class="font-bold">Rating note:</label>
                          <div
                            class="glossarize"
                            v-html="addCitations(guidance.rating_note)"
                          ></div>
                        </div>
                        <div v-if="guidance.alignment_note" class="lh-5">
                          <label class="tx-bold">Alignment note:</label>
                          <div
                            class="glossarize"
                            v-html="addCitations(guidance.alignment_note)"
                          ></div>
                        </div>
                        <div v-if="guidance.doc_guidance" class="lh-5">
                          <div
                            class="glossarize"
                            v-html="addCitations(guidance.doc_guidance)"
                          ></div>
                        </div>
                      </div>
                    </template>
                  </CardsVertical>
                </div>
              </div>
            </div>
          </div>
          <div v-if="part.sub_parts.length == 1" class="p-4">
            <h4 class="text-gray-1200 text-lg font-medium mb-1">
              {{ getSubPartTitle(part.sub_parts)[0].name }}
            </h4>
            <p
              v-if="part.note && part.note_position_override === 'top'"
              class="border-l-4 border-gray-1400 pl-2 text-sm py-2"
            >
              <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
              <span
                class="text-primary-1300 font-light glossarize"
                v-html="addCitations(part.note)"
              ></span>
            </p>

            <WFeatureV2SubParts
              v-if="versions.type === 'v2'"
              :sub-part="part.sub_parts[0]"
              :part="part"
            />
            <WFeatureSubParts
              v-else
              :sub-part="part.sub_parts[0]"
              :part="part"
            />
            <p
              v-if="part.note && part.note_position_override === 'bottom'"
              class="border-l-4 border-gray-1400 pl-2 text-sm py-2 mt-2"
            >
              <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
              <span
                class="text-primary-1300 font-light glossarize"
                v-html="addCitations(part.note)"
              ></span>
            </p>

            <CardsVertical
              v-if="
                part.part_guidances.length &&
                partguidance &&
                versions.type !== 'community'
              "
              class="mt-4 border-gray-900 border"
            >
              <template #body>
                <h4 class="text-sm font-bold capitalize text-gray-50">
                  {{ $t('WELL Core Guidance') }}:
                </h4>
                <div
                  v-for="guidance in part.part_guidances"
                  :key="guidance.id"
                  class="text-sm text-gray-50 font-light"
                >
                  <div v-if="guidance.rating_note">
                    <label class="font-bold glossarize">Rating note:</label>
                    <div v-html="addCitations(guidance.rating_note)"></div>
                  </div>
                  <div v-if="guidance.alignment_note" class="lh-5">
                    <label class="tx-bold glossarize">Alignment note:</label>
                    <div v-html="addCitations(guidance.alignment_note)"></div>
                  </div>
                  <div v-if="guidance.doc_guidance" class="lh-5 glossarize">
                    <div v-html="addCitations(guidance.doc_guidance)"></div>
                  </div>
                </div>
              </template>
            </CardsVertical>
          </div>
        </template>
      </LazyAccordiansBase>
    </div>
    <div v-else>
      <div v-if="showPartName">
        <LazyAccordiansBase
          :id="part.id"
          :expandable="expandable"
          bodyclass="border-t border-gray-1700"
        >
          <template #header>
            <h6 class="text-sm text-gray-1200 font-light">
              {{ $t('part') }} {{ part.part_number }}
            </h6>
            <h4
              class="font-medium text-gray-1200 text-lg capitalize leading-5 flex items-start"
            >
              {{ part.name }}
              <span
                v-if="features.type == 'O' && features.feature_code === null"
                class="ml-1"
                >{{ partPointsText }}</span
              >
              <div class="ml-auto inline-flex">
                <!-- Please check if it is showing in HSR/WPR -->
                <VTooltip v-if="part.gbd_exists">
                  <WIconsBase
                    icon="globe"
                    @click.native.stop="showIhmeModal()"
                  />
                  <template #popper>
                    <div class="w-44 inline-flex flex-wrap p-2 text-sm">
                      This WELL part addresses a risk factor for which there is
                      data in the Global Burden of Disease (GBD) database. Click
                      to learn more.
                    </div>
                  </template>
                </VTooltip>
                <span v-if="part.methods.length != 0">
                  <img
                    v-for="(method, index) in part.methods"
                    :key="index"
                    :src="
                      '/static/images/methods/' +
                      method.name.toLowerCase() +
                      '-white.png'
                    "
                    :alt="method.name.toLowerCase() + '-white.png'"
                    width="40"
                    height="40"
                  />
                </span>
              </div>
            </h4>
            <span
              v-if="partHasVerificationMethods && versions.type !== 'v2'"
              class="text-xs font-light text-gray-1200"
              >{{ $t('verified_by') }} {{ getPartVerificationMethods() }}</span
            >
          </template>
          <template #content>
            <div
              v-if="parts.length > 1"
              class="bg-yellow-50 border-l-4 border-yellow-400 p-4"
            >
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="ml-3 text-sm text-yellow-700">
                  Note: All parts must be met to achieve this feature
                </div>
              </div>
            </div>
            <div v-if="part.sub_parts.length > 1">
              <div class="border-t-4 border-gray-1700 mb-1">
                <TabsHorizontal
                  v-model="currentTab"
                  :tabs="getSubPartTitle(part.sub_parts)"
                  :tab-classes="['blockTabSelected', 'blockTab']"
                />
              </div>
              <div class="p-4">
                <div
                  v-for="(sub_part, sub_part_index) in part.sub_parts"
                  :key="sub_part_index"
                >
                  <div
                    v-if="
                      currentTab ===
                      getSubPartTitle(part.sub_parts)[sub_part_index].name
                    "
                  >
                    <WFeatureV2SubParts
                      v-if="versions.type === 'v2'"
                      :sub-part="sub_part"
                      :part="part"
                    />
                    <WFeatureSubParts
                      v-else
                      :sub-part="sub_part"
                      :part="part"
                    />
                    <p
                      v-if="part.note"
                      class="border-l-4 border-gray-1400 pl-2 text-sm my-2 py-1"
                    >
                      <strong class="text-primary-1300"
                        >{{ $t('Note') }}:</strong
                      >
                      <span
                        class="text-primary-1300 font-light glossarize"
                        v-html="addCitations(part.note)"
                      >
                      </span>
                    </p>
                    <CardsVertical
                      v-if="
                        part.part_guidances.length &&
                        partguidance &&
                        versions.type !== 'community'
                      "
                      class="mt-4 border-gray-900 border"
                    >
                      <template #body>
                        <h4 class="text-sm font-bold capitalize text-gray-50">
                          {{ $t('WELL Core Guidance') }}:
                        </h4>
                        <div
                          v-for="guidance in part.part_guidances"
                          :key="guidance.id"
                          class="text-sm text-gray-50 font-light"
                        >
                          <div v-if="guidance.rating_note">
                            <label class="font-bold glossarize"
                              >Rating note:</label
                            >
                            <div
                              v-html="addCitations(guidance.rating_note)"
                            ></div>
                          </div>
                          <div v-if="guidance.alignment_note" class="lh-5">
                            <label class="tx-bold glossarize"
                              >Alignment note:</label
                            >
                            <div
                              v-html="addCitations(guidance.alignment_note)"
                            ></div>
                          </div>
                          <div
                            v-if="guidance.doc_guidance"
                            class="lh-5 glossarize"
                          >
                            <div
                              class="glossarize"
                              v-html="addCitations(guidance.doc_guidance)"
                            ></div>
                          </div>
                        </div>
                      </template>
                    </CardsVertical>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="part.sub_parts.length == 1" class="p-4">
              <h4 class="text-gray-1200 text-lg font-medium mb-1">
                {{ getSubPartTitle(part.sub_parts)[0].name }}
              </h4>
              <p
                v-if="part.note && part.note_position_override === 'top'"
                class="border-l-4 border-gray-1400 pl-2 text-sm py-2"
              >
                <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                <span
                  class="text-primary-1300 font-light"
                  v-html="addCitations(part.note)"
                ></span>
              </p>
              <WFeatureSubParts
                v-if="versions.type === 'v2'"
                :sub-part="part.sub_parts[0]"
                :part="part"
              />
              <WFeatureV2SubParts
                v-else
                :sub-part="part.sub_parts[0]"
                :part="part"
              />
              <p
                v-if="part.note && part.note_position_override === 'bottom'"
                class="border-l-4 border-gray-1400 pl-2 text-sm py-2 mt-2"
              >
                <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                <span
                  class="text-primary-1300 font-light"
                  v-html="addCitations(part.note)"
                ></span>
              </p>
              <CardsVertical
                v-if="
                  part.part_guidances.length &&
                  partguidance &&
                  versions.type !== 'community'
                "
                class="mt-4 border-gray-900 border"
              >
                <template #body>
                  <h4 class="text-sm font-bold capitalize text-gray-50">
                    {{ $t('WELL Core Guidance') }}:
                  </h4>
                  <div
                    v-for="guidance in part.part_guidances"
                    :key="guidance.id"
                    class="text-sm text-gray-50 font-light"
                  >
                    <div v-if="guidance.rating_note">
                      <label class="font-bold">Rating note:</label>
                      <div v-html="addCitations(guidance.rating_note)"></div>
                    </div>
                    <div v-if="guidance.alignment_note" class="lh-5">
                      <label class="tx-bold">Alignment note:</label>
                      <div v-html="addCitations(guidance.alignment_note)"></div>
                    </div>
                    <div v-if="guidance.doc_guidance" class="lh-5">
                      <div v-html="addCitations(guidance.doc_guidance)"></div>
                    </div>
                  </div>
                </template>
              </CardsVertical>
            </div>
          </template>
        </LazyAccordiansBase>
      </div>
      <div v-else>
        <div v-if="part.sub_parts.length > 1">
          <TabsHorizontal
            v-model="currentTab"
            :tab-classes="['blockTabSelected', 'blockTab']"
            :tabs="getSubPartTitle(part.sub_parts)"
          />
          <div
            v-for="(sub_part, sub_part_index) in part.sub_parts"
            :key="sub_part_index"
          >
            <div
              v-if="
                currentTab ===
                getSubPartTitle(part.sub_parts)[sub_part_index].name
              "
              class="p-4"
            >
              <WFeatureV2SubParts :sub-part="sub_part" :part="part" />
              <p
                v-if="part.note"
                class="border-l-4 border-gray-1400 pl-2 text-sm py-2"
              >
                <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
                <span
                  class="text-primary-1300 font-light"
                  v-html="addCitations(part.note)"
                >
                </span>
              </p>
              <div
                v-if="part.part_guidances.length && partguidance"
                class="bg-gray-900 border border-gray-900 mt-4 p-2 rounded"
              >
                <h4 class="text-sm font-bold capitalize text-gray-50">
                  {{ $t('WELL Core Guidance') }}:
                </h4>
                <div
                  v-for="guidance in part.part_guidances"
                  :key="guidance.id"
                  class="text-sm text-gray-50 font-light"
                >
                  <div v-if="guidance.rating_note">
                    <label class="font-bold">Rating note:</label>
                    <div v-html="addCitations(guidance.rating_note)"></div>
                  </div>
                  <div v-if="guidance.alignment_note" class="lh-5">
                    <label class="tx-bold">Alignment note:</label>
                    <div v-html="addCitations(guidance.alignment_note)"></div>
                  </div>
                  <div v-if="guidance.doc_guidance" class="lh-5">
                    <div v-html="addCitations(guidance.doc_guidance)"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="part.sub_parts.length == 1" class="p-4">
          <h4
            class="capitalize flex focus:outline-none leading-5 py-3 text-center text-gray-1200 text-gray-1200 leading leading-7 block w-full items-center"
          >
            {{ getSubPartTitle(part.sub_parts)[0].name }}
          </h4>
          <p
            v-if="part.note && part.note_position_override === 'top'"
            class="border-l-4 border-gray-1400 pl-2 text-sm py-2"
          >
            <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
            <span
              class="text-primary-1300 font-light"
              v-html="addCitations(part.note)"
            ></span>
          </p>
          <WFeatureV2SubParts :sub-part="part.sub_parts[0]" :part="part" />
          <p
            v-if="part.note && part.note_position_override === 'bottom'"
            class="border-l-4 border-gray-1400 pl-2 mt-2 text-sm py-2"
          >
            <strong class="text-primary-1300">{{ $t('Note') }}:</strong>
            <span
              class="text-primary-1300 font-light"
              v-html="addCitations(part.note)"
            ></span>
          </p>
          <div
            v-if="part.part_guidances.length && partguidance"
            class="bg-gray-900 border border-gray-900 mt-4 p-2 rounded"
          >
            <h4 class="text-sm font-bold capitalize text-gray-50">
              {{ $t('WELL Core Guidance') }}:
            </h4>
            <div
              v-for="guidance in part.part_guidances"
              :key="guidance.id"
              class="text-sm text-gray-50 font-light"
            >
              <div v-if="guidance.rating_note">
                <label class="font-bold">Rating note:</label>
                <div v-html="guidance.rating_note"></div>
              </div>
              <div v-if="guidance.alignment_note" class="lh-5">
                <label class="tx-bold">Alignment note:</label>
                <div v-html="guidance.alignment_note"></div>
              </div>
              <div v-if="guidance.doc_guidance" class="lh-5">
                <div v-html="guidance.doc_guidance"></div>
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
import { mapState, mapGetters } from 'vuex'
export default {
  props: {
    parts: {
      type: Array,
      require: false,
      default: null,
    },
    part: {
      type: Object,
      require: false,
      default: null,
    },
    showPartName: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      currentConcept: this.$route.params.conceptName,
      currentTab: '',
      guidancePopover: [
        {
          value: 'Whole Building',
          text: 'All areas within the project boundary. If the Core Applicability Matrix indicates that projects can achieve a feature by providing a tenant budget, then project teams need to submit as part of documentation review design assumptions and sample cut-sheets (as applicable) that justify the budget and can be used by the tenant during their design and construction process.',
        },
        {
          value: 'Extent of Developer Buildout',
          text: 'Includes all non-leased space and all construction within the leased space for which the project team is responsible.',
        },
        {
          value: 'Leased Spaces',
          text: 'All areas within the project boundary that are leased to or owned by tenants.',
        },
        {
          value: 'Non-leased Spaces',
          text: 'All areas within the project boundary that is not considered leased space.',
        },
        {
          value: 'Building management staff',
          text: 'Individuals responsible for maintaining and operating the building, including contractors and sub-contractors. Workers who spend less than 30 hours per month in the building (i.e., who are not regular building occupants) are not considered building-management staff.',
        },
        {
          value: 'Direct staff',
          text: 'Building staff under direct employ. Note: If a project has no direct-staff on-site (i.e., the building is entirely operated by contracted building-management staff), the project is allowed to earn points by meeting feature requirements for all or a defined subset of building-management staff. Project must use a single consistent population across all features including preconditions (e.g., a project with no direct-staff may only earn a point for meeting an optimization for its building-management staff if it also meets all preconditions for that same group of people).',
        },
        {
          value: 'WELL Core',
          text: 'Encompasses all projects registered for WELL Core, including commercial and multifamily residential projects.',
        },
        {
          value: 'MFR Core',
          text: 'Refers to multifamily residential projects using WELL Core.',
        },
        {
          value: 'Commercial Core',
          text: 'Refers to all non-multifamily residential projects using WELL Core.',
        },
        {
          value: 'MFR Certification',
          text: 'Refers to all multifamily residential projects not using WELL Core. ',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('standard', ['getConcept']),
    ...mapState({
      features: (state) => state.standard.features,
      versions: (state) => state.standard.versions,
      expandable: (state) => state.settings.expandable,
      partguidance: (state) => state.partguidance,
      citations: (state) => state.standard.citations,
    }),
    concept() {
      return this.getConcept(this.currentConcept)
    },
    partPointsText() {
      let ptsText = '('
      if (
        this.part.min_points > 0 &&
        this.part.min_points !== this.part.points
      ) {
        ptsText += 'Max: '
      }
      let points = this.part.points
      if (this.partguidance && this.versions.type === 'v2') {
        points = this.part.core_points
      }
      ptsText += `${points} ${
        points <= 1 ? this.$i18n.t('point') : this.$i18n.t('points')
      })`
      return ptsText
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
  methods: {
    addGlossaryTooltips(fieldText) {
      // fieldText = this.addCitations(fieldText)
      const originalText = fieldText
      const glossaryTerm = this.$store.state.standard.terms
      for (let i = 0; i < glossaryTerm.length; i++) {
        const term = glossaryTerm[i].term
        let def = glossaryTerm[i].description
        def = def
          .replace(/"/g, '&quot;')
          .replace(/“/g, '&quot;')
          .replace(/”/g, '&quot;')
        let pos = originalText
          .toLowerCase()
          .indexOf(' ' + term.toLowerCase() + ' ')
        if (pos !== -1) {
          pos = fieldText.toLowerCase().indexOf(' ' + term.toLowerCase() + ' ')
          const currentText = fieldText.substr(pos + 1, term.length + 1)
          const replaceBy =
            '<span class="has-tooltip relative"><span class="tooltip w-48 rounded shadow-lg mb-10 p-4 bg-gray-1200 text-white text-sm">' +
            def +
            '</span><span class="border-dotted border-b border-gray-1200 cursor-pointer">' +
            currentText +
            '</span></span>'
          fieldText =
            fieldText.substr(0, pos + 1) +
            replaceBy +
            fieldText.substr(pos + term.length + 1)
        }
      }
      return fieldText
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
      return this.unitFilter(this.addGlossaryTooltips(fieldText))
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
    showIhmeModal() {
      if (process.client) {
        window.open(
          'https://v2.wellcertified.com/resources/well-country-briefs',
          '_blank'
        )
      }
    },
    getPartVerificationMethods() {
      let text = ''
      if (this.part.letter_of_assurances.length > 0) {
        for (let i = 0; i < this.part.letter_of_assurances.length; i++) {
          text += this.$i18n.t(this.part.letter_of_assurances[i].name) + ', '
        }
      }
      if (this.part.on_sites.length > 0) {
        for (let i = 0; i < this.part.on_sites.length; i++) {
          text += this.$i18n.t(this.part.on_sites[i].name) + ', '
        }
      }
      if (this.part.annotated_documents.length > 0) {
        for (let i = 0; i < this.part.annotated_documents.length; i++) {
          text += this.$i18n.t(this.part.annotated_documents[i].name) + ', '
        }
      }

      return text.substr(0, text.length - 2)
    },
    getSubPartTitle(subparts) {
      const arr = subparts.map((subpart) => {
        let title = this.$i18n.t('For ')
        const option = {}
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
          title += ' ' + this.$i18n.t('except') + ' '
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
        option.name = title
        return option
      })
      return arr
    },
  },
}
</script>

<style></style>
