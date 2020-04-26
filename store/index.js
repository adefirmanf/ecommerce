import Vuex from 'vuex'
import axios from 'axios'
import lodash from 'lodash'

const BASE_URL_API = process.env.baseUrlAPI
const CARTS = 'carts'

const createStore = () => {
  return new Vuex.Store({
    actions: {
      async GET_DATA_PRODUCTS({ commit }) {
        let { data } = await axios.get(`${BASE_URL_API}/products?search=kaos&merchant=blibli`)
        commit('setProducts', data[0].data)
      },
      async GET_CARTS({ commit }) {
        if (localStorage.getItem(CARTS)) {
          commit('initializeCarts', localStorage.getItem(CARTS))
        }
      }
    },
    state: {
      article: {},
      products: [],
      carts: [],
      detailProduct: {}
    },
    getters: {
      GET_ALL_PRODUCTS_RECOMMENDED: state => state.products.slice(0, (state.products.length) - (state.products.length - 12)),
      GET_PRODUCT_BY_ID: state => state.detailProduct,
      GET_CARTS: state => state.carts,
      GET_CARTS_BY_GROUP_QTY: state => _.groupBy(state.carts, 'name')
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
      },
      setCarts(state, data) {
        state.carts.push(data)
        localStorage.setItem(CARTS, JSON.stringify(state.carts))
      },
      initializeCarts(state, data) {
        state.carts = JSON.parse(data)
      }
    }
  })
}

export default createStore