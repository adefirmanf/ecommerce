import _ from "lodash";
export default {
  state: {
    selected: {},
    totalPriceCourier: 0,
    courierList: [
      {
        name: "JNE",
        service: "REG (Reguler)",
        infoText: "Estimated 2 - 3 Day",
        price: 5000
      },
      {
        name: "JNE",
        service: "YES (Yakin Esok Sampai)",
        infoText: "Estimated 1 - 2 Day",
        price: 10000
      },
      {
        name: "SiCepat",
        service: "Reguler",
        infoText: "Estimated 2 - 3 Day",
        price: 4500
      },
      {
        name: "SiCepat",
        service: "Best",
        infoText: "Estimated 1 - 2 Day",
        price: 8000
      }
    ]
  },
  getters: {
    GET_COURIER_LIST: state => state.courierList,
    GET_SELECTED_COURIER: state => productName => state.selected[productName],
    GET_TOTAL_PRICE_COURIER: state => state.totalPriceCourier
  },
  mutations: {
    setCourierSelectedToCarts(state, data) {
      state.selected[data.productTitle] = data;
    },
    setCourierTotal(state, data) {
      state.totalPriceCourier = data;
    }
  }
};
