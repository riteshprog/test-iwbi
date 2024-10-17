export default {
  getLatestVersion({ commit }) {
    this.$axios.get('api/latestVersions').then((response) => {
      commit('setLatestVersions', response.data)
    })
  },
  async fetchLatestVersion(
    { commit, dispatch, state },
    { currentVersion, currentConcept }
  ) {
    await this.$axios.get('api/versionsAndLanguage').then((response) => {
      commit('setVersionList', response.data)
      commit('setVersions', state.versionList[currentVersion])
    })
    await dispatch('getConcepts', state.versions.id)
  },

  getVersionDetails({ commit, state }, versionId) {
    this.$axios.get('api/versions?version_id=' + versionId).then((response) => {
      commit('setversionDetails', response.data[0])
    })
  },
  getConcepts({ commit }, versionId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`api/${versionId}/conceptAndFeature`)
        .then((response) => {
          commit('setConcepts', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getFeatures({ commit, dispatch }, featureId) {
    commit('setLoading', 'true')
    this.$axios
      .get('api/features/' + featureId + '?category=WELL Core')
      .then((response) => {
        commit('setFeatures', response.data)
        dispatch('getEquivalency', featureId)
        dispatch('getFaq', featureId)
        dispatch('getResources', featureId)
        commit('setLoading', 'false')
      })
  },
  getEquivalency({ commit }, featureId) {
    this.$axios
      .get('api/features/' + featureId + '/equivalency')
      .then((response) => {
        const obj = {
          id: featureId,
          data: response.data,
        }
        commit('setEquivalencies', obj)
      })
  },
  getFaq({ commit }, featureId) {
    this.$axios.get('api/features/' + featureId + '/faq').then((response) => {
      const obj = {
        id: featureId,
        data: response.data,
      }
      commit('setFaq', obj)
    })
  },
  getResources({ commit }, featureId) {
    this.$axios
      .get('api/features/' + featureId + '/resource')
      .then((response) => {
        const obj = {
          id: featureId,
          data: response.data,
        }
        commit('setResource', obj)
      })
  },
  getAppendices({ commit }, versionId) {
    this.$axios.get('api/' + versionId + '/appendices').then((response) => {
      commit('SET_APPENDICES', response.data)
    })
  },
  fetchAppendix({ commit, dispatch }, appendixId) {
    this.$axios.get('api/appendix/' + appendixId).then((response) => {
      if (response.data.length) {
        dispatch('getConceptCitations', response.data[0].concept_id)
      }
      commit('SET_APPENDIX_DETAILS', response.data)
    })
  },

  async getGlossaryTerms({ commit, state }, { versionType, lang }) {
    await this.$axios
      .get('api/glossary?language=' + lang + '&version=' + versionType)
      .then((response) => {
        commit('setTerms', response.data)
      })
  },

  getCitations({ commit, getters }, currentConcept) {
    if (currentConcept) {
      this.$axios
        .get('api/citations/' + getters.getConcept(currentConcept).id)
        .then((response) => {
          commit('setCitations', response.data)
        })
    }
  },
  getConceptCitations({ commit }, id) {
    this.$axios.get('api/citations/' + id).then((response) => {
      commit('setCitations', response.data)
    })
  },
  citationClickEvent(context, { e, ele }) {
    if (e.target.matches('.citation-link')) {
      ele.isHidden = false
    }
  },
}
