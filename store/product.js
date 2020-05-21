import axios from "axios";
import storage from "../helper/localstorage";
import _ from "lodash";
const BASE_URL_API = process.env.baseUrlAPI;
const CARTS = "carts";

export default {
  actions: {
    async GET_DATA_PRODUCTS({ commit }, payload) {
      let { data } = await axios.get(
        encodeURI(
          `${BASE_URL_API}/products?search=${payload.search}&merchant=${payload.merchant}`
        )
      );
      commit("setProducts", data);
    },
    async GET_CARTS({ commit }) {
      if (localStorage.getItem(CARTS)) {
        commit("initializeCarts", storage.getItem.json(CARTS));
      }
    },
    async GET_DETAIL_PRODUCT({ commit }, payload) {
      let { data } = await axios.get(
        `${BASE_URL_API}/products/${payload.merchant.name}/${payload.merchant.productId}/${payload.merchant.sku}`
      );
      commit("setDetailProduct", data);
    },
    async GET_SIMILIAR_PRODUCT({ commit }, payload) {
      let { data } = await axios.get(
        encodeURI(
          `${BASE_URL_API}/products?search=${payload.search}&merchant=${payload.merchant}`
        )
      );
      commit("setSimiliarProduct", data[0].data);
    }
  },
  state: {
    article: {},
    products: [],
    carts: [],
    similiarProduct: [],
    detailProduct: {},
    tempProduct: {}
  },
  getters: {
    GET_ALL_PRODUCTS: state => state.products,
    GET_ALL_PRODUCTS_RECOMMENDED: state => {
      if (state.products.length > 0) {
        return state.products[0].data.slice(
          0,
          state.products[0].data.length - (state.products[0].data.length - 6)
        );
      } else {
        return [];
      }
    },
    GET_ALL_PRODUCTS_CATEGORIES: state => {
      if (state.products.length > 0) {
        return state.products[0].data.slice(
          0,
          state.products[0].data.length - (state.products[0].data.length - 6)
        );
      } else {
        return [];
      }
    },
    GET_PRODUCT_BY_ID: state => state.detailProduct,
    GET_CARTS: state => state.carts,
    GET_CARTS_BY_GROUP_QTY: state => _.groupBy(state.carts, "name"),
    GET_SIMILIAR_PRODUCT: state => state.products[0].data
  },
  mutations: {
    setArticle(state, data) {
      state.article = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
    setTempProduct(state, data) {
      storage.setItem.json(data.merchant.productId);
    },
    setDetailProduct(state, data) {
      let key = data.productId;
      key = "TEMP_PRODUCT";
      const getTempProduct = storage.getItem.json(key);
      const detailProduct = {
        ...getTempProduct,
        ...data
      };
      storage.setItem.json(key, detailProduct);
      state.detailProduct = storage.getItem.json(key);
    },
    setSimiliarProduct(state, data) {
      state.similiarProduct = data;
    },
    storeProduct(state, data) {
      let key = data.productId;
      key = "TEMP_PRODUCT";
      storage.setItem.json(key, data);
      state.detailProduct = data;
    },
    setCarts(state, data) {
      state.carts.push(data);
      storage.setItem.json(CARTS, state.carts);
    },
    initializeCarts(state, data) {
      state.carts = data;
    },
    initializeProducts(state, data) {
      state.detailProduct = data;
    }
  }
};
