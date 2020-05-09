import Vuex from 'vuex'
import Product from './product'
import User from './user'

const createStore = () => {
  return new Vuex.Store({
    actions: {
      ...Product.actions,
      ...User.actions
    },
    state: {
      ...Product.state,
      ...User.state,
    },
    getters: {
      ...Product.getters,
      ...User.getters,
    },
    mutations: {
      ...Product.mutations,
      ...User.mutations
    }
  })
}

export default createStore