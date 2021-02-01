import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status:'',
    loggedIn: false,
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.loggedIn = true;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
  actions: {
    login({ commit }, user) {
      return user;
    },
    logout({ commit }) {
      return false;
    },
  },
  getters: {},
});
