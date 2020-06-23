import Vuex from "vuex";
import Product from "./product";
import Courier from "./courier";
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
      ...Review.state,
      ...Courier.state
    },
    getters: {
      ...Product.getters,
      ...User.getters,
      ...Review.getters,
      ...Courier.getters
    },
    mutations: {
      ...Product.mutations,
      ...User.mutations,
      ...Review.mutations,
      ...Courier.mutations
    }
  });
};

export default createStore;
