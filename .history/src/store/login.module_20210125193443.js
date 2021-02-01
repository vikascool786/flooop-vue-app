import AuthService from "../services/auth.service";import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './login.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});