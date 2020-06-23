import _ from "lodash";
export default {
  state: {
    selected: [],
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
    GET_SELECTED_COURIER: state => state.selected
  },
  mutations: {
    setCourierSelectedToCarts(state, data) {
      function ungroup(n) {
        return [n, n];
      }
      let a = _.groupBy(state.carts, "name")[data.productTitle].map(n => {
        return { ...n, courier: data.courier };
      });

      let i = _.flatMap(a, ungroup);
      state.carts = state.carts.map(n => {
        console.log(n.name);
      });

      //   state.carts[index]
    }
  }
};
