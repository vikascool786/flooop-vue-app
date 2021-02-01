import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import CreateEvent from "./views/create-event.vue";
import EditEvent from "./views/edit-event.vue";
import EventDetail from "./views/event-detail.vue";
import Events from "./views/events.vue";
import Category from "./views/category.vue";
import Account from "./views/my-account.vue";
import Login from "./views/login.vue";
import Twcallback from "./views/twcallback.vue";
import Licallback from "./views/licallback.vue";
import Join from "./views/join.vue";
import ForgotPassword from "./views/forgot-password.vue";
import ChangePassword from "./views/change-password.vue";
import ResetPassword from "./views/reset-password.vue";
import Profile from "./views/profile.vue";
import Schedule from "./views/schedule.vue";
import axios from 'axios';
// const API_URL = 'https://answebtechnologies.in/flooopadmin/api/';
// const API_URL = 'http://sh009.hostgator.tempwebhost.net/~a1610nqz/flooopadmin/api/';
const API_URL = 'http://floooplife.com/flooopadmin/api/';
// const API_URL = 'http://localhost/flooopadmin/api/';

Vue.use(VueRouter);
function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("jwt", user.jwt);
    axios({
      method: "post",
      url: API_URL + 'user/validate_token.php',
      data: form,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        var result = response.data;
        if (result.message == "Access granted.") {
          isAuthenticated = true;
        } else {
          localStorage.removeItem("user");
          isAuthenticated = false;
        }
        if (isAuthenticated) {
          next(); // allow to enter route
        }
        else {
          next('/login'); // go to '/login';
        }
      },
        error => {
          localStorage.removeItem("user");
          next('/login');
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        });
  }
  else {
    isAuthenticated = false;
    next('/login'); // go to '/login';
  }
}

function guardMyrouteForLoggedInUser(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem('user')) {
    isAuthenticated = false;
  }
  else {
    isAuthenticated = true;
  }
  if (isAuthenticated) {
    next(); // allow to enter route
  }
  else {
    next('/my-account'); // go to '/login';
  }
}

const router = new VueRouter({
  mode: "history",
  base: "/flooop/",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "*", name: "home", component: Home },
    { path: "/home", name: "home", component: Home },
    {
      path: "/create-event",
      name: "createEvent",
      component: CreateEvent,
      beforeEnter: guardMyroute
    },
    {
      path: "/edit-event/:id",
      name: "editEvent",
      component: EditEvent,
      beforeEnter: guardMyroute
    },
    { path: "/events", name: "Event", component: Events },
    { path: "/category/:cid", name: "Category", component: Category },
    { path: "/event-detail/:id", name: "EventDetail", component: EventDetail },
    {
      path: "/my-account", name: "Account", component: Account,
      beforeEnter: guardMyroute
    },
    {
      path: "/login", name: "Login", component: Login,
      beforeEnter: guardMyrouteForLoggedInUser
    },
    { path: "/twcallback", name: "Twcallback", component: Twcallback },
    { path: "/licallback", name: "Licallback", component: Licallback },
    {
      path: "/join", name: "Join", component: Join,
      beforeEnter: guardMyrouteForLoggedInUser
    },
    {
      path: "/forgot-password", name: "ForgotPassword", component: ForgotPassword,
      beforeEnter: guardMyrouteForLoggedInUser
    },
    {
      path: "/change-password", name: "ChangePassword", component: ChangePassword,
      beforeEnter: guardMyroute
    },
    {
      path: "/reset-password/", name: "ResetPassword", component: ResetPassword,
      beforeEnter: guardMyrouteForLoggedInUser
    },
    // {
    //   path: "/reset-password/:code", name: "ResetPassword", component: ResetPassword,
    //   beforeEnter: guardMyrouteForLoggedInUser
    // },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/schedule", name: "Schedule", component: Schedule }
  ],

  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
