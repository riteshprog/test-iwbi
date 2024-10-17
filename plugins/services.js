import { Glossarizer } from '~/plugins/glossary.js'

export default ({ app }, inject) => {
  const glossary = function (el, terms) {
    for (let i = 0; i < el.length; i++) {
      const gloss = new Glossarizer(el[i], terms)
      gloss.parseData()
    }
  }
  // inject the service, making it available in the  context, component, store, etc.
  inject('glossary', glossary)
}
