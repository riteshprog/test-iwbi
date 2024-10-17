export default {
  async getUserInfo({ commit }) {
    return await this.$axios.get(`api/getUserInfo`).then((res) => {
      commit('setUser', res.data)
    })
  },

  async login({ commit, dispatch }, payload) {
    if (payload.token) {
      commit('setToken', payload.token)
      this.$axios.setToken(payload.token, 'Bearer')

      this.$cookies.set('authentication.token', payload.token)

      await dispatch('getUserInfo')
    }
  },

  logout({ commit }) {
    this.$cookies.remove('test.cba.token', {
      path: '/',
      domain: '.wellcertified.com',
    })
    this.$cookies.remove('authentication.token')
    commit('setUser', '')
  },
}
