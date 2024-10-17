export default {
  setNavState(state, newValue) {
    // localStorage.setItem('navExpanded', newValue)
    state.navExpanded = newValue
  },
  setSidebarTab(state, newValue) {
    state.sidebarTab = newValue
  },
  initialise(state) {
    if (localStorage.getItem('navExpanded')) {
      state.navExpanded = localStorage.getItem('navExpanded')
    }
  },
  setExpandable(state, newValue) {
    state.expandable = newValue
  },
}
