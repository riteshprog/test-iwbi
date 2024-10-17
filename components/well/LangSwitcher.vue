<template>
  <div>
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      class="text-gray-1200 font-light text-base leading-7 flex"
      type="button"
      @click.prevent.stop="switchStandardPath(locale.code)"
    >
      <WIconsBase icon="globe" />
      {{ locale.code === 'en' ? 'English' : '中文' }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      latestVersions: (state) => state.standard.latestVersions,
      versions: (state) => state.standard.versions,
    }),
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    this.$store.dispatch('standard/getLatestVersion')
  },
  methods: {
    switchStandardPath(locale) {
      this.$i18n.setLocale(this.availableLocales[0].code)
      if (
        this.$route.fullPath !== '/' &&
        this.$route.fullPath !== '/cn' &&
        this.$route.fullPath !== '/cn/'
      ) {
        if (process.client) {
          if (locale === 'en') {
            if (this.versions.type === 'community') {
              window.location.href = '/' + this.latestVersions.community.en
            } else if (this.versions.type === 'v2-pilot') {
              window.location.href = '/' + this.latestVersions.v2pilot.en
            } else if (this.versions.type === 'v2-hsr') {
              window.location.href = '/' + this.latestVersions.v2hsr.en
            } else if (this.versions.type === 'wpr') {
              window.location.href = '/' + this.latestVersions.wpr.en
            } else if (this.versions.type === 'wer') {
              window.location.href = '/' + this.latestVersions.wer.en
            } else {
              window.location.href = '/' + this.latestVersions.v2.en
            }
          } else if (locale === 'cn') {
            if (this.versions.type === 'community') {
              window.location.href = '/cn/' + this.latestVersions.community.cn
            } else if (this.versions.type === 'v2-pilot') {
              window.location.href = '/cn/' + this.latestVersions.v2pilot.cn
            } else if (this.versions.type === 'v2-hsr') {
              window.location.href = '/cn/' + this.latestVersions.v2hsr.cn
            } else if (this.versions.type === 'wpr') {
              window.location.href = '/cn/' + this.latestVersions.wpr.cn
            } else if (this.versions.type === 'wer') {
              window.location.href = '/cn/' + this.latestVersions.wer.cn
            } else {
              window.location.href = '/cn/' + this.latestVersions.v2.cn
            }
          }
        }
      }
    },
  },
}
</script>
