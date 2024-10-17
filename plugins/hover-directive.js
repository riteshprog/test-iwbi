import Vue from 'vue'

Vue.directive('add-class-hover', {
  bind(el, binding, vnode) {
    const { value = '' } = binding
    el.addEventListener('mouseenter', () => {
      el.classList.add(value)
    })
    el.addEventListener('mouseleave', () => {
      el.classList.remove(value)
    })
  },
  unbind(el, binding, vnode) {
    const { value = '' } = binding
    el.removeEventListener('mouseenter', () => {
      el.classList.add(value)
    })
    el.removeEventListener('mouseleave', () => {
      el.classList.remove(value)
    })
  },
})

Vue.directive('remove-class-hover', {
  bind(el, binding, vnode) {
    const { value = '' } = binding
    el.addEventListener('mouseenter', () => {
      el.classList.remove(value)
    })
    el.addEventListener('mouseleave', () => {
      el.classList.add(value)
    })
  },
  unbind(el, binding, vnode) {
    const { value = '' } = binding
    el.removeEventListener('mouseenter', () => {
      el.classList.add(value)
    })
    el.removeEventListener('mouseleave', () => {
      el.classList.remove(value)
    })
  },
})
