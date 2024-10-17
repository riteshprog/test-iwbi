import Vue from 'vue'

Vue.filter('filterCoreGuidance', function (value, guidancePopover) {
  if (value) {
    let fieldText = value
    const originalText = value
    for (let j = 0; j < guidancePopover.length; j++) {
      const term = guidancePopover[j].value
      let pos = originalText.toLowerCase().indexOf(' ' + term.toLowerCase())
      if (pos !== -1) {
        pos = fieldText.toLowerCase().indexOf(' ' + term.toLowerCase())
        const currentText = fieldText.substr(pos, term.length + 1, term)
        const replaceBy =
          '<span class="border-dotted-b" data-toggle="tooltip" data-placement="bottom" title="' +
          guidancePopover[j].text +
          '">' +
          currentText +
          '</span>'
        fieldText =
          fieldText.substr(0, pos) +
          replaceBy +
          fieldText.substr(pos + term.length + 1)
      }
    }
    return fieldText
  } else {
    return value
  }
})

Vue.filter('getLoaNames', function (loa) {
  let str = ''
  if (loa && loa.length) {
    loa.forEach((element) => {
      str += element.name + ', '
    })
    return str.slice(0, -2)
  }
})
