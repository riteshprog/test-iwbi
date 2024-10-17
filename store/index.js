export const state = () => ({
  partguidance: false,
  unit: true,
  countryCode: null,
  guidanceList: [],
})
export const mutations = {
  setUnit(state, value) {
    state.unit = value
  },
  setPartguidance(state) {
    state.partguidance = !state.partguidance
  },
  resetPartguidance(state) {
    state.partguidance = false
  },
  setGuidanceList(state, payload) {
    state.guidanceList = payload
  },
  setCountryCode(state, payload) {
    state.countryCode = payload
  },
}
export const actions = {
  addCitations({ state, dispatch }, fieldText) {
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
            if (newResult[j].includes('-') < 0) {
              if (process.client) {
                window.jQuery.each(state.citations, function (index, citItem) {
                  if (parseInt(citItem.id) === parseInt(newResult[j])) {
                    newResult[j] = citItem.sequence
                  }
                })
              }
            } else {
              let stringWithHyphen = newResult[j]
              const hyphenSplit = stringWithHyphen.split('-')
              for (let k = 0; k < hyphenSplit.length; k++) {
                if (process.client) {
                  window.jQuery.each(
                    state.citations,
                    function (index, citItem) {
                      if (parseInt(citItem.id) === parseInt(hyphenSplit[k])) {
                        hyphenSplit[k] = citItem.sequence
                      }
                    }
                  )
                }
              }
              stringWithHyphen = hyphenSplit.join('-')
              newResult[j] = stringWithHyphen
            }
          }
          newResult = newResult.join(',')
          newResult =
            '[<a class="citation-link" href="#">' + newResult + '</a>]'
          fieldText = fieldText.replace(oldMatch, newResult)
        }
      }
    }
    return dispatch('unitFilter', fieldText)
  },
  unitFilter({ state, dispatch }, data) {
    let e = data
    const b = e.match(/{{well-unit}}(.*?){{\/well-unit}}/g)
    if (state.country_code === null) {
      dispatch('getUserCountryByIP')
    }
    if (b && b.length) {
      b.forEach((element) => {
        const tagLength = element.length
        const tagIndex = e.indexOf('{{well-unit}}')
        let temp = element.replace(/{{\/?well-unit}}/g, '')
        temp = state.unit ? temp.split('|')[0] : temp.split('|')[1]
        const firstString = e.slice(0, tagIndex)
        const secondString = e.slice(tagIndex + tagLength, e.length)
        e = firstString + temp + secondString
      })
    }
    return dispatch('pointsFilter', e)
  },
  pointsFilter({ state, dispatch }, data) {
    let e = data
    const b = e.match(/{{well-points}}(.*?){{\/well-points}}/g)
    if (state.country_code === null) {
      dispatch('getUserCountryByIP')
    }
    if (b && b.length) {
      b.forEach((element) => {
        const tagLength = element.length
        const tagIndex = e.indexOf('{{well-points}}')
        let temp = element.replace(/{{\/?well-points}}/g, '')
        temp = !state.partGuidance ? temp.split('|')[0] : temp.split('|')[1]
        const firstString = e.slice(0, tagIndex)
        const secondString = e.slice(tagIndex + tagLength, e.length)
        e = firstString + temp + secondString
      })
    }
    return e
  },
  getUserCountryByIP({ commit }) {
    this.$axios.get('https://ipapi.co/json/').then((response) => {
      const data = response.data
      if (data.country) {
        commit('setCountryCode', data.country)
        commit('setUnit', data.country === 'US')
      } else {
        commit('setCountryCode', true)
        commit('setUnit', 'US')
      }
    })
  },
}
