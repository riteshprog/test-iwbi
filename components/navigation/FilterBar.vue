<template>
  <div class="relative w-full">
    <FormulateInput
      v-model="versionName"
      :options="computedVersions"
      type="select"
      class="text-black bg-white remove-arrow w-full placeholder-current"
      placeholder="Select an option"
      aria-label="Addenda version"
      @input="changeVersion"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    filterBar: {
      type: Boolean,
      required: false,
      default: false,
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      versionName: this.$route.params.version,
      unit: true,
      unitFilter: 'Imperial',
      pointFilter: 'Well Certification',
    }
  },
  computed: {
    ...mapState({
      versionList: (state) => state.standard.versionList,
      versions: (state) => state.standard.versions,
      expandable: (state) => state.settings.expandable,
      navExpanded: (state) => state.settings.navExpanded,
      currentTab: (state) => state.settings.sidebarTab,
      currentUser: (state) => state.authentication.currentUser,
    }),
    computedVersions() {
      const versions = Object.keys(this.versionList)
      const options = []
      for (let i = 0; i < versions.length; i++) {
        if (
          this.versionList[versions[i]].language[0].code ===
            this.$i18n.locale &&
          this.versionList[versions[i]].type === this.versions.type
        ) {
          const option = {
            label: this.versionList[versions[i]].name,
            value: this.versionList[versions[i]].version,
          }
          options.push(option)
        }
      }
      return options
    },
    availableButtons() {
      if (
        this.currentTab !== 'overview' ||
        this.currentTab !== 'glossary' ||
        this.currentTab !== 'appendices' ||
        this.currentTab !== 'resources'
      ) {
        return false
      }
      return true
    },
    featurePdfLink() {
      const link =
        process.env.apiUrl +
        +'features/' +
        this.$store.state.standard.features.id +
        '/pdfExport?token=' +
        this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      return link
    },
  },
  watch: {
    unit() {
      this.$store.commit('setUnit', this.unit)
    },
  },

  methods: {
    changeVersion(option) {
      if (this.computedVersions.length) {
        const cVersion = Object.values(this.computedVersions).filter(
          (id) => id.value === option
        )
        const route =
          '/' + this.$i18n.locale + '/' + cVersion[0].value + '/overview'

        this.$router.push(route)
      }
    },
    downloadStandardPdf() {
      const token = this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      if (token !== undefined && token.length > 0) {
        const url =
          process.env.apiUrl +
          'api/' +
          this.versions.id +
          '/pdfExport?token=' +
          token
        if (process.client) {
          window.open(url, '_blank')
        }
      } else {
        const query = this.$config.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
      }
    },
    exportV2Standard() {
      const token = this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      if (token !== undefined && token.length > 0) {
        const points =
          this.pointFilter === 'WELL Certification' ? 'certification' : 'core'
        const url =
          process.env.apiUrl +
          'api/' +
          this.versions.id +
          '/pdfExport?token=' +
          token +
          '&unitFilter=' +
          this.unitFilter.toLowerCase() +
          '&pointFilter=' +
          points
        if (process.client) {
          window.open(url, '_blank')
        }
      } else {
        const query = this.$config.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
      }
    },
    download() {
      if (this.versions && this.versions.type === 'v2') {
        this.$refs.modal.isHidden = false
      } else {
        this.downloadStandardPdf()
      }
    },
  },
}
</script>
