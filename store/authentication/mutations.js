export default {
  setToken(state, payload) {
    state.token = payload
  },
  setUser(state, newValue) {
    state.currentUser = newValue
  },
  dismissPopup(state) {
    state.popupDismissed = true
  },
}
