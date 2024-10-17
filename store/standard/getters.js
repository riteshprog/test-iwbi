export default {
  totalPreconditions: (state) => {
    let precondition = []
    let totalPreconditions = 0
    state.concepts.forEach(function (value) {
      precondition = value.features.filter((x) => x.type === 'P')
      totalPreconditions += precondition.length
    })
    return totalPreconditions
  },
  totalOptimization: (state) => {
    let optimization = []
    let totalOptimization = 0
    state.concepts.forEach(function (value) {
      optimization = value.features.filter((x) => x.type === 'O')
      totalOptimization += optimization.length
    })
    return totalOptimization
  },
  conceptTotalOptimization: (state) => {
    const optimization = []
    state.concepts.forEach(function (value) {
      optimization.push(value.features.filter((x) => x.type === 'O'))
    })
    return optimization
  },
  conceptTotalPreconditions: (state) => {
    const precondition = []
    state.concepts.forEach(function (value) {
      precondition.push(value.features.filter((x) => x.type === 'P'))
    })
    return precondition
  },
  getFeatureCode: (state) => (concept, feature) => {
    let code = ''
    if (feature.feature_code === null) {
      code = concept.feature_prefix
      if (
        feature.feature_order < 10 &&
        state.versions.type !== 'v2-hsr' &&
        state.versions.type !== 'wpr'
      ) {
        code += '0' + feature.feature_order
      } else {
        code += feature.feature_order
      }
    } else {
      code = feature.feature_code
    }
    return code
  },
  getConcept: (state) => (currentConcept) => {
    return Object.values(state.concepts).filter(function (x) {
      return x.name.toLowerCase() === currentConcept.toLowerCase()
    })[0]
  },
  fetchSingleData: (state) => (id, arr) => {
    const data = Object.values(arr).filter(function (item) {
      return item.id === id
    })
    return data[0]
  },
}
