import _ from "lodash";
const ADDRESS = "address";

export default {
  state: {
    address: {}
  },
  getters: {
    GET_ADDRESS: state => state.address
  },
  mutations: {
    intializeAddress(state, data) {},
    setAddress(state, data) {
      state.address = data;
    }
  }
};
