import Vuex from "vuex";
import Product from "./product";
import Courier from "./courier";
import Review from "./review";
import User from "./user";
import Address from "./address";
import Categories from "./categories";

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
      ...Courier.state,
      ...Address.state,
      ...Categories.state
    },
    getters: {
      ...Product.getters,
      ...User.getters,
      ...Review.getters,
      ...Courier.getters,
      ...Address.getters,
      ...Categories.getters
    },
    mutations: {
      ...Product.mutations,
      ...User.mutations,
      ...Review.mutations,
      ...Courier.mutations,
      ...Address.mutations
    }
  });
};

export default createStore;
