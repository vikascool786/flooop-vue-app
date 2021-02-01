import Vue from 'vue';
import Vuex from 'vuex';
//general
import { auth } from './login.module';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        auth
    }
});