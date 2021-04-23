import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    logIn(state, condition) {
      state.loggedIn = condition;
    },
  },
  actions: {},
  getters: {
    isLoggedIn: (state) => state.loggedIn === true,
  },
  modules: {},
});
