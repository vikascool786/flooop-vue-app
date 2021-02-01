
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.store({
  state: {
    loggedIn: false,
  },
  mutation: {
    checkLoggedIn: (state) => {
      state.loggedIn = true;
    },
  },
});
