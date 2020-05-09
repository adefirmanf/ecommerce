
export default {
  actions: {
    async AUTHENTICATION({ commit }) {
      commit('setAuth', true)
    },
    async GET_USER({ commit }, payload) {
      commit('setUser', payload)
    }
  },
  getters: {
    GET_AUTH_STATUS: state => state.auth
  },
  mutations: {
    setAuth(state, data) {
      state.auth = data
    },
    setUser(state, data) {
      state.user = data
    },
    initializeCarts(state, data) {
      state.carts = data
    },
    initializeProducts(state, data) {
      state.detailProduct = data
    }
  }
}