<template>
<html style="overflow: hidden;" lang="en">
  <head>
    <title>Flooop App</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="UTF-8" />
    <meta
      name="keywords"
      content="flooop"
    />
  </head>

  <body>
    <!-- top-header -->
     <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                          <router-link style=" letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/events"><span class="head">EVENTS</span></router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="#">
                        <router-link style="   letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/schedule"><span class="head">SCHEDULE</span></router-link>
                       </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                          <router-link style="   letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/schedule"><span class="head">SCHEDULE</span></router-link>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mx-auto my-2 order-0 order-md-1 position-relative">
                <a class="mx-auto" href="#" v-on:click='redirectToHome'>
                    <img style="border-radius: 10px;" :src="require('./assets/images/logo.png')" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                <ul class="navbar-nav mr-auto text-center">
                    <li class="nav-item">
                        <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/#"><span class="head">BECOME A HOST</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/join"><span class="head">JOIN</span></router-link><a class="noLink"><span class="head">&nbsp;&nbsp;|&nbsp;&nbsp;</span></a>
                        <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/login"><span class="head">LOGIN</span></router-link>
                    </li>
                </ul>
            </div>
        </nav>
     </div>
     <div class="container-fluid">
    <div style="position: fixed;top: 0;width: 100%;z-index: 100;" class="agile-main-top">
        <div style="height: 62px;" v-if="!isMobile()" class="row main-top-w3l">
          <div  class="col-lg-12 col-md-12 col-12 header-right mt-1" id="header">
            <!-- header lists -->
      
            <ul style="text-align: center; padding-left: revert;">
              <li style="padding-right:  4em;" class="text-center">
                <router-link style=" letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/events"><span class="head">EVENTS</span></router-link>
              </li>
              <li style="padding-right:  2em;"  class="text-center">
                <router-link style="   letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/schedule"><span class="head">SCHEDULE</span></router-link>
              </li>
              <li class="text-center" v-on:click='redirectToHome' style="width: 12em;padding-left: 25px;padding-right: 20px;border-bottom: none !important;">
                     <img style="border-radius: 10px;" :src="require('./assets/images/logo.png')" />
              </li>
              <li style="width: auto;padding: 10px  4em 10px 2em;" class="text-center">
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/#"><span class="head">BECOME A HOST</span></router-link>
              </li>
               <li style="margin-left:-30px;padding-right:  4em;" class="text-center text-white; border-bottom:none;" v-if="loggedIn">
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400; border-bottom:none;" to="/my-account"><i style="font-size:15px;letter-spacing: 2px;font-size: 1em;font-weight: 400;" class="fa fa-user"></i></router-link>
              </li>
               <li style="margin-left:-30px;" class="text-center text-white; width:15%;" v-if="!loggedIn">
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/join"><span class="head">JOIN</span></router-link><a class="noLink"><span class="head">&nbsp;&nbsp;|&nbsp;&nbsp;</span></a>
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/login"><span class="head">LOGIN</span></router-link>
              </li>
            </ul>
            <!-- //header lists -->
          </div>
            </div>
              <div style="height: auto;" v-if="isMobile()" class="row main-top-w3l">
          <div class="col-lg-12 col-12 header-right mt-1">
            <!-- header lists -->
             <ul style="text-align: left; padding-left: 20px;">
              <li style="padding-right:  4em;" class="text-center">
                <router-link style=" letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/events"><span class="head">EVENTS</span></router-link>
              </li>
              <li style="padding-right:  2em;"  class="text-center">
                <router-link style="   letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/schedule"><span class="head">SCHEDULE</span></router-link>
              </li>
              <li class="text-center" v-on:click='redirectToHome' style="width: 12em;padding-left: 25px;padding-right: 25px;border-bottom: none !important;">
                     <img style="border-radius: 10px;" :src="require('./assets/images/logo.png')" />
              </li>
              <li style="width: auto;padding: 10px  4em 10px 2em;" class="text-center">
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/#"><span class="head">BECOME A HOST</span></router-link>
              </li>
               <li style="margin-left:-30px;padding-right:  4em;" class="text-center text-white" v-if="loggedIn">
                <i style="font-size:15px;letter-spacing: 2px;font-size: 1em;font-weight: 400;" class="fa fa-user"></i>
              </li>
                <li style="margin-left:-30px;" class="text-center text-white; width:15%;" v-if="!loggedIn">
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/join"><span class="head">JOIN</span></router-link><a class="noLink"><span class="head">&nbsp;&nbsp;|&nbsp;&nbsp;</span></a>
                <router-link style="letter-spacing: 2px;font-size: 0.92em;font-weight: 400;" to="/login"><span class="head">LOGIN</span></router-link>
              </li>
            </ul>
            <!-- //header lists -->
          </div>
          </div>
      </div>
    </div>
    <!-- //top-header -->
<br>
<br>
<br v-if="window.width < 600">
  
          <router-view class="view"></router-view>
    <!-- copyright -->
    <hr style="    width: 80%;margin: auto;" />
    <br />
    <div class="row footer1" style="margin: 35px;">
      <div class="col-lg-3 col-md-6 col-12" style="height: 200px;text-align: center;">
        <span style="font-weight: 500;color: grey;">INVITE YOUR FRIENDS OR POST ON SOCIAL MEDIA</span>
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <a href="https://www.instagram.com/" target="_blank" ><i
              class="fab fa-instagram"
              style="font-size:40px;color:#fc9b6e;margin-left:20px; cursor: pointer;"
            ></i></a>
            <a href="https://www.facebook.com/" target="_blank" >
            <i
              class="fab fa-facebook-square"
              style="font-size:40px;color:#47639f;margin-left:20px; cursor: pointer;"
            ></i></a>
            <a href="https://www.twitter.com/" target="_blank" >
            <i
              class="fab fa-twitter-square"
              style="font-size:40px;color:#6ab6f0;margin-left:20px; cursor: pointer;"
            ></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" >
            <i
              class="fab fa-linkedin-in"
              style="font-size:40px;color:#47639f;margin-left:20px; cursor: pointer;"
            ></i></a>
            <a href="https://www.pinterest.com/" target="_blank" >
            <i
              class="fab fa-pinterest-square"
              style="font-size:40px;color:#e14243;margin-left:20px; cursor: pointer;"
            ></i></a>
            <a href="https://www.instagram.com/" target="_blank" >
            <i
              class="fas fa-envelope"
              style="font-size:40px;color:rgb(168 162 162);;margin-left:20px; cursor: pointer;"
            ></i></a>
          </div>
        </div>
        <br />
        <br />
        <span
          style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;"
        >@ 2020 ALL RIGHTS RESERVED</span>
      </div>
      <div class="col-lg-3 col-md-6 col-12" style="height: 200px;text-align: center;">
        <span style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;">EVENTS</span>
        <br />
        <br />
        <span style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;">SCHEDULE</span>
        <br />
        <br />
        <span style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;">HOST AN EVENT</span>
        <br />
        <br />
        <span style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;">JOIN AN EVENT</span>
      </div>

      <div class="col-lg-2 col-md-6 col-12" style="height: 200px;text-align: center;">
        <span style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;">PRICING</span>
        <br />
        <br />
        <span
          style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;"
        >TERMS OF SERVICE</span>
        <br />
        <br />
        <span
          style="font-weight: 400;font-size: small;color:#939292;cursor: pointer;"
        >PRIVACY POLICY</span>
      </div>
         <div class="col-lg-1 col-md-6 col-12" style="height: 200px;text-align: center;color:black;">
            <router-link style="font-size: 12px;color:#939292 !important;" to="/home">Home</router-link>
            <br>
            <br>
        <router-link style="font-size: 12px;color:#939292 !important;" to="/events">Events</router-link>
         <br>
         <br>
         <router-link style="font-size: 12px;color:#939292 !important;" to="/create-event">Create Event</router-link>
          <br>
          <!-- <br>
           <router-link style="font-size: 12px;color:#939292 !important;" to="/event-confirm">Event Confirm</router-link>
            <br> -->
            <br>
           <router-link style="font-size: 12px;color:#939292 !important;" to="/event-detail">Event Detail</router-link>
          </div>

           <div class="col-lg-1 col-md-6 col-12" style="height: 200px;text-align: center;color:black;">
            <router-link style="font-size: 12px;color:#939292 !important;" to="/my-account">My Account</router-link>
            <br>
               <br>
        <router-link style="font-size: 12px;color:#939292 !important;" to="/login" v-if="!loggedIn">Login</router-link>
         <br>
            <br>
         <router-link style="font-size: 12px;color:#939292 !important;" to="/join" v-if="!loggedIn">Register</router-link>
          <br>
             <br>
             <span v-on:click='logout' style="font-size: 12px;color:#939292 !important;cursor:pointer;" v-if="loggedIn">Logout</span>
          </div>
            <div class="col-lg-2 col-md-6 col-12" style="height: 200px;text-align: center;color:black;">
           <router-link style="font-size: 12px;color:#939292 !important;" to="/change-password">Change Password</router-link>
            <br>
               <br>
           <router-link style="font-size: 12px;color:#939292 !important;" to="/forgot-password">Forgot Password</router-link>
           <br>
               <br>
           <router-link style="font-size: 12px;color:#939292 !important;" to="/reset-password">Reset Password</router-link>
          </div>
      
    </div>
  </body>
</html>
</template>

<script>
import AuthService from './services/auth.service';
import Router from 'vue-router';
import Vue from "vue";
export default {
  name: "app",
data() {
   return {
       isLoggedIn : Boolean,
       loggedInData : Boolean,
    window: {
            width: 0,
            height: 0
        }
   }
 },
  components: {},
      created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    computed: {
      loggedIn(){
        return this.$store.state.auth.status.loggedIn;
      },
    showMenu() {
    return this.$route.name !== 'login' && this.$route.name !== 'register';
    },
    },
     mounted() {
        // this.isLoggedIn = AuthService.isLoggedIn();
     },
    methods: {
    logout : function() 
          {
         if (localStorage.getItem('user')) {
         localStorage.removeItem('user');
          Vue.$toast.success("User has logout successfully", {
            duration: 2000
          });
          this.$store.dispatch('auth/logout');
          this.$router.push('/flooop/login');
            }
          },
    redirectToHome : function() 
               {
                this.$router.push('/home')
               },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
          isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
    }
};
</script>

<style>
.v-toast__text
{
    padding: 1em 1em !important;
    color: white !important;
}
.container{
  max-width:1100px !important;
  padding-right: 50px;
  padding-left: 50px;
 }
#button:hover
{
  background-color : rgb(255, 131, 84) !important;
  color:white !important;
}
a {
    color: white !important;
    cursor: pointer;
}
a:hover {
    border-bottom: 2px solid #F77239;
    padding-bottom: 15px;
    color: #F77239 !important;
    cursor: pointer;
}
a:hover .head {
  transform: scale(1.1);
  font-weight: 500;
  padding-bottom: 20px;
}
.head {
  display: inline-block;
}
.noLink{
  color: #fff !important;
}
.noLink:hover{
  color: #fff !important;
  text-decoration: none !important;
  border: none !important;
}
.footer1 a:hover{
  padding-bottom: 5px;
  text-decoration: none !important;
}
@import "./assets/css/bootstrap.css";
@import "./assets/css/style.css";
@import "./assets/css/fontawesome-all.css";
</style>
