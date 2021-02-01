import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {},
  },
  mutations: {},
  actions: {
    login({commit}, user){
        return user;
    },
    logout({commit}){
        return false;
      }
  },
  getters: {},
});
