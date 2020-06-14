import firebase from "firebase";
require("firebase/firestore");
import config from "../google-credentials";

firebase.initializeApp(config.config);
const db = firebase.firestore();

export default {
  actions: {
    async FETCH_DATA_REVIEWS({ commit }) {
      db.collection("reviews")
        .get()
        .then(res => {
          const data = res.docs.map(n => n.data());
          commit("setFetchResults", data);
        });
    },
    async ADD_DATA_REVIEW({ commit }, payload) {
      db.collection("reviews")
        .add({
          name: payload.name,
          date: new Date(),
          rate: payload.rate,
          review: payload.review,
          email: payload.email,
          img: payload.image,
          label: ""
        })
        .then(res => {
          console.log(res);
        });
    }
  },
  state: {
    reviews: [],
    selected: {}
  },
  getters: {
    GET_DATA_REVIEWS: state => state.reviews,
    GET_DATA_REVIEWS_SELECTED: state => state.selected
  },
  mutations: {
    setFetchResults(state, data) {
      state.reviews = data;
      state.selected = data[0];
    },
    setSelectedLocalData(state, data) {
      state.selected = data;
    }
  }
};
