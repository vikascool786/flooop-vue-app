import Vue from "vue";
import { store } from './store';
import App from "./App.vue";
import Zoom from "./Zoom.vue";
import Main from "./Main.vue";
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

Vue.prototype.$apiURI = "http://floooplife.com/flooopadmin/api/";
// Vue.prototype.$apiURI = "http://flooopadmin.local/api/";

Vue.use(VueSimpleAlert);
Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
})
Vue.use(VueAxios, axios)
Vue.use(VueSelectImage)
Vue.use(Buefy);

Vue.component("app-layout", App);
Vue.component("zoom-layout", Zoom);
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(Main),
}).$mount("#app");
