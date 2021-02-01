import { loginService } from '../services/login.service';
import AuthService from "../services/auth.service";
import { router } from '../router';
const state = {
    isLogin: false,
    token:null,
    user:null,
};
const actions = {
    login({commit}, {}) {
        commit('loginRequest', { "login request" });
    
        let result = AuthService.isLoggedIn();
        if(result){
            commit('loginSuccess');
            console.log("login success");
        }
    },
    logout({commit}) {
        commit('resetState');
    },
    clearState ({ commit }) {
        commit('resetState');
    },
};
const mutations = {
    resetState (state) {
        state.isLogin=false;
    },
    loginRequest(state, user) {
        state.isLogin=true;
    },
    loginSuccess(state) {
        state.isLogin=true;
    },
    loginFailure(state) {
        state.isLogin=false;
    },
};
export const login = {
    namespaced: true,
    state,
    actions,
    mutations
};