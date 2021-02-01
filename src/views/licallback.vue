<template>
  <div class="level-item has-text-centered">
    <p>Linkedin callback page</p>
  </div>
</template>

<script>
import Vue from "vue";
import AuthService from "../services/auth.service";
import axios from 'axios';
export default {
  name: "licallback",
  data: function() {
    return {
      isLoggedIn : Boolean,
    };
  },
   filters: {
        truncate: function (text, length, suffix) {
          if (text.length > length) {
            return text.substring(0, length) + suffix;
          } else {
            return text;
          }
        },
    },
  methods: {
  },
  mounted() {
    var code = this.$route.query.code; 
    var state = this.$route.query.state;
    var session_state = localStorage.getItem('linkedin_state');
    //this.isLoggedIn = AuthService.isLoggedIn();
    //
      AuthService.llogin(code,state,session_state).then(
          // eslint-disable-next-line no-unused-vars
          response => {
           //console.log(response); 
           if (response.data.jwt) {
              localStorage.setItem('user', JSON.stringify(response.data));
              Vue.$toast.success(response.data.message, {
                duration: 2000
              });
              let loginRedirect = localStorage.getItem('loginRedirect');
              if(loginRedirect=='' || loginRedirect==null)
              this.$router.push("/my-account");
              else
              this.$router.push(loginRedirect);

            }
          },
          error => {
             //console.log(error); 
             Vue.$toast.error(error.response.data.message, {
              duration: 2000
            });
            this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            this.$router.push("/login");
          }
        );
    //
    
  }
};
</script>

<style>
.col-lg-4 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-2 {
  padding-right: 22px !important;
  padding-left: 22px !important;
}
.col-lg-3 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-1 {
  padding-right: 22px !important;
  padding-left: 22px !important;
}

.col-lg-12 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-6 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-8 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}

#join:hover {
  background: rgb(201 52 52) !important;
}
.carousel-indicators li {
  position: relative !important;
  -webkit-box-flex: 0 !important;
  margin-right: 3px !important;
  margin-left: 3px !important;
  text-indent: -999px !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.router-link-active {
  border-bottom: 2px solid orange;
  padding-bottom: 10px;
}
.card {
  box-shadow: 0 0px 0px 0 #929292;
  transition: 0.3s;
  width: 40%;
  border-radius: 15px;
}

.card:hover {
  box-shadow: 0 6px 10px 0 #929292;
}
</style>
