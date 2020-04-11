import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    actions: {
      async GET_DATA_PRODUCTS({ commit }) {
        let { data } = await axios.get('http://localhost:8080/products?search=kaos&merchant=blibli')
        commit('setProducts', data[0].data)
      },
    },
    state: {
      article: {},
      products: [],
      detailProduct: {}
    },
    getters: {
      GET_ALL_PRODUCTS_RECOMMENDED: state => state.products.slice(0, (state.products.length) - (state.products.length - 8)),
      GET_PRODUCT_BY_ID: state => state.detailProduct
    },
    mutations: {
      setArticle(state, data) {
        state.article = data
      },
      setProducts(state, data) {
        state.products = data

      },
      storeProduct(state, data) {
        state.detailProduct = data
      }
    }
  })
}

export default createStore