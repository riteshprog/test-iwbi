<template>
  <div v-if="feature">
    <div v-if="type === 'rating'">
      <p>
        Projects pursuing WELL Certification may seek to gain points for
        individual building or community certifications using a health and
        wellness or green rating system that does not currently qualify for
        points under WELL. IWBI invites projects to submit information about the
        rating system they would like to use by selecting “Rating System
        Submission” in the dropdown menu below and completing the required
        information. Projects can submit rating systems at no additional cost,
        either before or after project registration. You can find
        <a
          href="https://well.support/pre-approved-programs~ca36f076-229e-438f-b23f-643626026f74"
          target="_blank"
          >the list of pre-approved rating systems here</a
        >.
      </p>
      <p>
        A formal ruling on the rating system submission will be provided within
        20 to 25 business days. Project teams may submit any questions to
        <WLinksBase target="_blank" link="https://www.wellcertified.com/contact"
          >WELL Contact</WLinksBase
        >.
      </p>
    </div>
    <div
      class="border-b border-blue-900 flex justify-between pb-4 font-medium text-xl text-gray-50"
    >
      Submit an Equivalency Proposal
      <WIconsBase
        class="cursor-pointer"
        icon="close"
        @click.native="$parent.isHidden = true"
      />
    </div>
    <div class="p-4">
      <div>
        <p v-if="type !== 'rating'">
          <strong class="text-gray-50">Feature</strong> -
          <span class="text-blue-500 font-bold">
            {{ concept.feature_prefix
            }}{{
              feature.feature_order > 200
                ? 'P' + (feature.feature_order - 200)
                : feature.feature_order
                ? '0' + feature.feature_order
                : feature.feature_order
            }}
            {{ feature.name }}</span
          >
        </p>
      </div>

      <FormulateForm
        class="space-y-2 mt-2"
        name="proposal"
        @submit="submitProposal"
      >
        <div>
          <label
            for="featurePart"
            class="w-full text-sm font-semibold leading-5 text-gray-100 sm:mt-px sm:pt-2"
            >Applicable part(s)<sup>*</sup></label
          >

          <multiselect
            v-model="partSelected"
            :multiple="true"
            :searchable="true"
            :hide-selected="false"
            :allow-empty="true"
            track-by="part_number"
            :show-labels="false"
            name="featurePart"
            placeholder="Please Select Parts"
            :options="parts"
            label="label"
            validation="required"
          >
            <template slot="singleLabel" slot-scope="{ option }">
              <span>Part {{ option.part_number }} - {{ option.name }}</span>
            </template>
          </multiselect>
        </div>
        <div v-if="type === 'rating'">
          <label
            for="featureType"
            class="w-full text-sm font-semibold leading-5 text-gray-100 sm:mt-px sm:pt-2"
            >Applicable Feature or Requirement<sup>*</sup></label
          >
          <multiselect
            v-model="featuretypeSelected"
            disabled
            :multiple="false"
            :searchable="true"
            :hide-selected="false"
            :allow-empty="true"
            :show-labels="false"
            name="featureType"
            placeholder="Please Select Type"
            :options="featuretype"
          >
          </multiselect>
        </div>
        <div v-if="type === 'rating'">
          <label>Type of System<sup>*</sup></label>
          <multiselect
            v-model="systemTypeSelected"
            :disabled="disableTypeOfSystem"
            :multiple="false"
            :searchable="true"
            :hide-selected="false"
            :allow-empty="true"
            :show-labels="false"
            name="systemType"
            placeholder="Please select system type"
            :options="systemType"
            label="text"
          >
          </multiselect>
        </div>
        <ClientOnly v-if="type === 'ep'">
          <FormulateInput
            id="reason"
            :key="forceReMount + 2"
            v-model="reason"
            type="richtext"
            name="reason"
            label="Reason for Equivalency Request *"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please state why the project cannot comply with the feature
            requirements as written. This may be due to cultural concerns, the
            availability of an alternate reference standard, or the lack of
            compliant materials, etc.
          </p>
        </ClientOnly>
        <ClientOnly>
          <FormulateInput
            id="proposed"
            :key="forceReMount + 3"
            v-model="proposed"
            type="richtext"
            name="proposed"
            :label="
              type === 'ep'
                ? 'Proposed Alternative Means of Compliance*'
                : 'Proposed Rating System*'
            "
            validation="required"
          />
          <p v-if="type === 'ep'" class="text-xs text-gray-1100 font-light">
            Please provide the name and a description of the proposed
            equivalency and how it meets the intent of the feature. If
            applicable, please state what international standards are referenced
            within the proposed equivalent standard.
          </p>
          <p v-else>Please provide the name of the proposed rating system.</p>
        </ClientOnly>
        <div>
          <FormulateInput
            v-model="region"
            type="text"
            name="region"
            :label="
              type === 'ep'
                ? 'Regions/Countries where Equivalency may be Applicable*'
                : 'Regions/Countries where rating system may be applicable*'
            "
            class="w-full"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please state in what regions or countries this
            <span v-if="type === 'ep'">equivalency</span
            ><span v-else>rating system</span> would be most applicable.
          </p>
        </div>
        <div v-if="type == 'rating'">
          <FormulateInput
            v-model="development"
            type="textarea"
            name="development"
            label="Development process*"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide a description of how the proposed rating system was
            developed, e.g., through industry partnerships, research channels,
            or other processes.
          </p>
        </div>
        <div v-if="type === 'rating'">
          <FormulateInput
            v-model="scopeRating"
            type="textarea"
            name="scopeRating"
            label="Scope of rating system*"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide information on the key topics, objectives, and
            research areas addressed by the rating system.
          </p>
        </div>
        <div>
          <FormulateInput
            v-model="verificationMethod"
            type="textarea"
            name="verificationMethod"
            :label="
              type === 'ep'
                ? 'Verification method within proposed equivalent*'
                : 'Verification method*'
            "
            validation="required"
          />
          <p v-if="type === 'ep'" class="text-xs text-gray-1100 font-light">
            If applicable, please include a description of the verification
            method within the proposed equivalency, ie, performance-based,
            third-party verified, lab-tested, etc.
          </p>
          <p v-else class="text-xs text-gray-1100 font-light">
            Please include a description of the verification method within the
            proposed rating system, e.g., performance-based, third-party
            reviewed, lab-tested, etc.
          </p>
        </div>
        <div v-if="type === 'rating'">
          <FormulateInput
            v-model="scoringProcess"
            type="textarea"
            name="scoringProcess"
            label="
            Scoring process*
          "
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide a description of the protocol for award of
            certification, including point scheme and cost, as well as the
            method to process assessments for final rulings.
          </p>
        </div>
        <FormulateInput
          v-if="type === 'rating'"
          v-model="postOccupancy"
          :options="[
            { text: 'Yes', value: 1 },
            { text: 'No', value: 0 },
          ]"
          type="checkbox"
          label="Post-occupancy or -construction evaluation of on-site indoor environmental quality (IEQ) conditions"
        />
        <div v-if="type === 'rating'">
          <FormulateInput
            v-model="additional"
            type="textarea"
            name="additional"
            label="Additional Information*"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide any additional relevant information we should know
            about the rating system.
          </p>
        </div>
        <div v-if="type == 'ep'">
          <FormulateInput
            v-model="featureRequirement"
            type="textarea"
            name="featureRequirement"
            label="Similarities to WELL feature requirement*"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide a description of the similarities between the WELL
            feature requirements and the proposed equivalency, including testing
            or measurement protocols, emission/content limitations, etc.
          </p>
        </div>
        <div v-if="type == 'ep'">
          <FormulateInput
            v-model="differenceWellRequirement"
            type="textarea"
            name="differenceWellRequirement"
            label="Differences from WELL feature requirement*"
            validation="required"
          />
          <p class="text-xs text-gray-1100 font-light">
            Please provide a description of the differences between the WELL
            feature requirement and the proposed equivalency, including testing
            or measurement protocols, emission/content limitations, etc. If
            applicable, please provide an explanation of any potential benefits
            associated with these differences.
          </p>
        </div>
        <FormulateInput
          :key="forceReMount"
          v-model="formData.document"
          label="Supporting Documents"
          :value="formData.document"
          type="fileupload"
          upload-path="Ep/"
          mime-types=""
        />

        <FormulateInput
          v-if="!uploadingDoc"
          type="submit"
          label="Submit Equivalency"
        />
        <WButtonsBase v-else>
          <WLoadingSpinner type="button" class="mx-auto" />
        </WButtonsBase>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureId: {
      type: Number,
      require: true,
      default: null,
    },
    feature: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      uploadingDoc: false,
      forceReMount: 0,
      type: this.$parent.$parent.getType,
      concept: this.$parent.$parent.concept,
      proposed: '',
      formData: {
        file: null,
        document: [],
      },
      parts: [],
      reason: '',
      partSelected: null,
      additional: '',
      featuretype: [
        'WELL Building Standard version 2 – Feature I05: Green Building Rating Systems',
        'WELL Building Standard version 2 – Feature I04: Gateways to Wellness: Green Building Rating Systems',
        'WELL Community Standard: Certified Buildings',
        'WELL Community Standard – Feature GND: Green Rating Systems',
      ],
      featuretypeSelected: '',
      systemType: [
        { text: 'Health and Wellness', value: 'Heath and Wellness' },
        { text: 'Green', value: 'Green' },
      ],
      systemTypeSelected: '',
      development: '',
      scopeRating: '',
      scoringProcess: '',
      postOccupancy: '',
      region: '',
      verificationMethod: '',
      featureRequirement: '',
      differenceWellRequirement: '',
      disableTypeOfSystem: false,
      uploading: false,
      documentData: 'Ep/',
    }
  },

  watch: {
    featuretypeSelected(newValue) {
      const index = this.featuretype.indexOf(newValue)
      if (index !== -1) {
        if (index === 0 || index === 4) {
          this.systemTypeSelected = this.systemType[1]
          this.disableTypeOfSystem = true
        } else if (index === 1) {
          this.systemTypeSelected = this.systemType[0]
          this.disableTypeOfSystem = true
        } else {
          this.systemTypeSelected = []
          this.disableTypeOfSystem = false
        }
      }
    },
  },
  mounted() {
    this.setFeatureType()
    this.forceReMount++
  },
  methods: {
    setFeatureType() {
      if (this.feature && this.concept.name.toLowerCase() === 'innovations') {
        if (this.feature.feature_order === 5) {
          this.featuretypeSelected = this.featuretype[0]
        } else if (this.feature.feature_order === 4) {
          this.featuretypeSelected = this.featuretype[1]
        }
      }
      this.getParts()
    },
    getParts() {
      const self = this
      this.$axios.get('api/features/' + this.featureId).then((response) => {
        response.data.parts.map(function (part) {
          const p = {
            label: part.name,
            value: part.id,
          }

          self.parts.push(p)

          return self.parts
        })
        if (process.client) {
          if (window.localStorage.part_id) {
            self.partSelected = self.parts.filter(
              (a) => a.id.toString() === window.localStorage.part_id.toString()
            )
          }
        }
      })
    },
    submitProposal() {
      this.uploadingDoc = true
      let parts = []

      this.partSelected.forEach((a) => parts.push(a.value))
      const doc = this.formData.document.map(function (file) {
        return { link_s3: file.url }
      })

      const data = {
        type: 'ep',
        proposed: this.proposed,
        region: this.region,
        project_id: null,
        feature_id: this.featureId,
        part_id: this.partSelected[0].value,
        sub_type: 0,
        verification_method: this.verificationMethod,
        document: doc,
      }
      if (this.type === 'rating') {
        data.sub_type = 1
        data.ep_scope = this.scopeRating
        data.scoring_process = this.scoringProcess
        data.comment = this.additional
        data.version_id = this.$root.versionId
        data.system_type = this.featuretypeSelected.value
        data.requirement = this.development
        data.ieq = this.postOccupancy === null ? 0 : this.postOccupancy[0]
      } else {
        data.reason = this.reason
        data.diff_feature_req = this.differenceWellRequirement
        data.similar_feature_req = this.featureRequirement
      }

      this.$axios.post('api/aap/create', data).then((response) => {
        this.uploadingDoc = false
        this.$parent.isHidden = true
        this.forceReMount++
        this.additional =
          this.featuretypeSelected =
          this.development =
          this.scopeRating =
          this.scoringProcess =
            ''
        this.differenceWellRequirement =
          this.featureRequirement =
          this.verificationMethod =
            ''
        this.region = ''
        this.reason = ''
        this.proposed = ''
        this.formData.document = []
        this.partSelected = null
        parts = []
      })
      this.$formulate.reset('proposal')
    },
  },
}
</script>
