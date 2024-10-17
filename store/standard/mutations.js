export default {
  setLatestVersions(state, payload) {
    if (payload) {
      if (payload['v2-pilot']) {
        if (payload['v2-pilot'].en) {
          state.latestVersions.v2pilot.en =
            payload['v2-pilot'].en.version + '/overview'
        }
        if (payload['v2-pilot'].cn) {
          state.latestVersions.v2pilot.cn =
            payload['v2-pilot'].cn.version + '/overview'
        }
      }
      if (payload['v2-hsr']) {
        if (payload['v2-hsr'].en) {
          state.latestVersions.v2hsr.en =
            payload['v2-hsr'].en.version + '/overview'
        }
        if (payload['v2-hsr'].cn) {
          state.latestVersions.v2hsr.cn =
            payload['v2-hsr'].cn.version + '/overview'
        }
      }
      if (payload.community) {
        if (payload.community.en) {
          state.latestVersions.community.en =
            payload.community.en.version + '/overview'
        }
        if (payload.community.cn) {
          state.latestVersions.community.cn =
            payload.community.cn.version + '/overview'
        }
      }
      if (payload.v2) {
        if (payload.v2.en) {
          state.latestVersions.v2.en = payload.v2.en.version + '/overview'
        }
        if (payload.v2.cn) {
          state.latestVersions.v2.cn = payload.v2.cn.version + '/overview'
        }
      }
      if (payload.wpr) {
        if (payload.wpr.en) {
          state.latestVersions.wpr.en = payload.wpr.en.version + '/overview'
        }
        if (payload.wpr.cn) {
          state.latestVersions.wpr.cn = payload.wpr.cn.version + '/overview'
        }
      }
      if (payload.wer) {
        if (payload.wer.en) {
          state.latestVersions.wer.en = payload.wer.en.version + '/overview'
        }
        if (payload.wer.cn) {
          state.latestVersions.wer.cn = payload.wer.cn.version + '/overview'
        }
      }
    }
  },
  setVersionList(state, payload) {
    state.versionList = payload
  },
  setVersions(state, payload) {
    state.versions = payload
  },
  setVersionType(state, payload) {
    state.versionType = payload
  },
  setVersionName(state, payload) {
    state.versionName = payload
  },
  setVersionId(state, payload) {
    state.versionId = payload
  },
  setConcepts(state, payload) {
    state.concepts = payload
  },
  setConcept(state, payload) {
    state.concept = payload
  },
  setConceptName(state, payload) {
    state.conceptName = payload
  },
  setConceptId(state, payload) {
    state.conceptId = payload
  },
  setversionDetails(state, payload) {
    state.versionDetails = payload
  },
  setFeatures(state, payload) {
    state.features = payload
  },
  setCitations(state, payload) {
    state.citations = payload
  },
  setEquivalencies(state, payload) {
    state.equivalencies.push(payload)
  },
  setFaq(state, payload) {
    state.faq.push(payload)
  },
  setResource(state, payload) {
    state.resource.push(payload)
  },
  setTerms(state, payload) {
    state.terms = payload
  },
  SET_APPENDICES(state, payload) {
    state.appendices = payload
  },
  SET_APPENDIX_DETAILS(state, payload) {
    state.appendix_details = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
}
