import Vuex from "vuex";
import Product from "./product";
import Review from "./review";
import User from "./user";

const createStore = () => {
  return new Vuex.Store({
    actions: {
      ...Product.actions,
      ...User.actions,
      ...Review.actions
    },
    state: {
      ...Product.state,
      ...User.state,
      ...Review.state
    },
    getters: {
      ...Product.getters,
      ...User.getters,
      ...Review.getters
    },
    mutations: {
      ...Product.mutations,
      ...User.mutations,
      ...Review.mutations
    }
  });
};

export default createStore;
