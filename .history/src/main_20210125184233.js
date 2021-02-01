import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import router from "./routers";
import Buefy from "buefy";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSelectImage from 'vue-select-image'
import "buefy/dist/buefy.css";
import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/js/all.js'
import 'vue-select-image/dist/vue-select-image.css'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueSimpleAlert from "vue-simple-alert";
//import GoogleAuth from '@/config/google_oAuth.js';
import GoogleAuth from "./config/google_oAuth.js";
const gauthOption = {
  clientId: '430299638290-0ncq4i2q1n6j40vvr4m2ic5f4rlbpjt6.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
};
Vue.use(GoogleAuth, gauthOption);
Vue.use(Vuex);
Vue.use(VueSimpleAlert);
Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
})
Vue.use(VueAxios, axios)
Vue.use(VueSelectImage)
Vue.use(Buefy);

export const store = new Vuex.store({
  state: {
    loggedIn: false,
  }
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
