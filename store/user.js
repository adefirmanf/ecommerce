import storage from "../helper/localstorage";
const USER_KEY = "LOGGED_IN";

export default {
  actions: {
    async AUTHENTICATION({ commit }, payload) {
      commit("setAuth", payload);
    },
    async GET_AUTH_AND_USER({ commit }) {
      if (localStorage.getItem(USER_KEY)) {
        commit("initializeUser", storage.getItem.json(USER_KEY));
      } else {
        commit("setStatusAuth", false);
      }
    }
  },
  state: {
    auth: false,
    user: {
      profile: {
        email: ""
      }
    }
  },
  getters: {
    GET_AUTH_STATUS: state => state.auth,
    GET_USER: state => state.user
  },
  mutations: {
    setAuth(state, data) {
      storage.setItem.json("LOGGED_IN", data);
      state.user = data.additionalUserInfo;
      state.auth = true;
    },
    setStatusAuth(state, data) {
      state.auth = data;
    },
    setUser(state, data) {
      state.user = data;
    },
    initializeUser(state, data) {
      state.auth = true;
      state.user = data.additionalUserInfo;
    }
  }
};
