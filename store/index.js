import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    actions: {
      async GET_DATA_PRODUCTS({ commit }) {
        let { data } = await axios.get('http://localhost:8080/products?search=kaos&merchant=blibli')
        commit('setProducts', data[0].data)
      }
    },
    state: {
      article: {},
      products: []
    },
    getters: {
      GET_ALL_PRODUCTS_RECOMMENDED: state => state.products.slice(0, (state.products.length) - (state.products.length - 8))
    },
    mutations: {
      setArticle(state, data) {
        state.article = data
      },
      setProducts(state, data) {
        state.products = data
        console.log(state.products)
      }
    }
  })
}

export default createStore