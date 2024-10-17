export class Glossarizer {
  constructor(el, glossary) {
    this.base = {
      terms: [],
      excludes: [],
      replaced: [],
      replaceTag: 'span',
      replaceClass: 'glossary-term',
      regexOption: 'ig',
      replaceOnce: true,
      lookupTagName: 'p, ul, a, em, strong, i, b, li',
      exactMatch: false,
      glossary,
    }
    this.cleanedTerms = []
    this.excludedTerms = []
    this.el = el

    this.glossary = glossary
  }

  parseData() {
    for (let i = 0; i < this.base.glossary.length; i++) {
      const terms = this.base.glossary[i].term.split(',')
      for (let j = 0; j < terms.length; j++) {
        /* Trim */
        const trimmed = terms[j].replace(/^\s+|\s+$/g, '')
        const isExclusion = trimmed.indexOf('!')
        if (isExclusion === -1 || isExclusion !== 0) {
          /* Glossary terms array */
          this.base.terms.push(trimmed)
        } else {
          /* Excluded terms array */
          this.base.excludes.push(trimmed.substr(1))
        }
      }
    }

    this.wrapTerms()
  }

  clean(text) {
    const reEscape = new RegExp(
      '(\\' +
        ['/', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '\\'].join(
          '|\\'
        ) +
        ')',
      'g'
    )
    return text.replace(reEscape, '\\$1')
  }

  getDescription(term) {
    const regex = new RegExp('(,|s*)' + this.clean(term) + '\\s*|\\,$', 'i')

    for (let i = 0; i < this.glossary.length; i++) {
      if (this.base.exactMatch) {
        if (this.glossary[i].term === this.clean(term)) {
          /* eslint-disable no-useless-escape */
          return this.glossary[i].description.replace(/\"/gi, '&quot;')
        }
      } else if (
        this.glossary[i].term.match(regex) &&
        this.glossary[i].term
          .toLowerCase()
          .startsWith(this.clean(term).toLowerCase())
      ) {
        /* eslint-disable no-useless-escape */
        return this.glossary[i].description.replace(/\"/gi, '&quot;')
      }
    }
  }

  wrapTerms() {
    this.cleanedTerms = this.clean(this.base.terms.join('|'))
    this.excludedTerms = this.clean(this.base.excludes.join('|'))
    const nodes = this.el.querySelectorAll(this.base.lookupTagName)

    for (let i = 0; i < nodes.length; i++) {
      this.traverser(nodes[i])
    }
  }

  traverser(node) {
    let next
    const This = this

    if (node.nodeType === 1) {
      /*
         Element Node
         */
      if ((node = node.firstChild)) {
        do {
          // Recursively call traverseChildNodes
          // on each child node
          next = node.nextSibling
          /**
           * Check if the node is not glossarized
           */
          if (node.className !== This.base.replaceClass) {
            this.traverser(node)
          }
        } while ((node = next))
      }
    } else if (node.nodeType === 3) {
      const temp = document.createElement('div')
      let data = node.nodeValue
      const reEx = new RegExp(
        '(?:^|\\b)(' + this.excludedTerms + ')(?!\\w)',
        This.base.regexOption
      )
      const re = new RegExp(
        '(?:^|\\b)(' + this.cleanedTerms + ')(?!\\w)',
        This.base.regexOption
      )

      if (re.test(data)) {
        const excl = reEx.exec(data)
        data = data.replace(re, function (match, offset) {
          This.base.replaced.push(match)
          const ir = new RegExp('(?:^|\\b)' + This.clean(match) + '(?!\\w)')
          const result = ir.exec(data)

          if (result) {
            if (excl && This.base.excludes.length) {
              const id = offset
              const exid = excl.index
              const exl = excl.index + excl[0].length
              if (exid <= id && id <= exl) {
                return match
              } else {
                return (
                  '<' +
                  This.base.replaceTag +
                  ' class="' +
                  This.base.replaceClass +
                  '" data-title="' +
                  This.getDescription(match) +
                  '">' +
                  match +
                  '</' +
                  This.base.replaceTag +
                  '>'
                )
              }
            } else {
              return (
                '<' +
                This.base.replaceTag +
                ' class="cursor-pointer ' +
                This.base.replaceClass +
                '"data-title="' +
                This.getDescription(match) +
                '">' +
                match +
                '</' +
                This.base.replaceTag +
                '>'
              )
            }
          }
        })
        temp.innerHTML = data
        while (temp.firstChild) {
          node.parentNode.insertBefore(temp.firstChild, node)
        }

        node.parentNode.removeChild(node)
      }
    }
  }
}
