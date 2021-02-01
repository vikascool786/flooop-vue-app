<template>
  <div class="level-item has-text-centered">
    <div style="width: 90%" class="ads-grid py-sm-6 py-6">
      <div
        style="padding-right: 4vw; padding-left: 4vw"
        class="py-xl-4 py-lg-2"
      >
        <div class="row">
          <div class="col-lg-3 col-md-3 col-12"></div>

          <div class="col-lg-6 col-md-6 col-12">
            <div class="card" style="width: 100%; height: 100%; padding: 25px">
              <div style="margin: 14px" class="row">
                <div
                  style="color: rgb(146, 146, 146); text-align: center; font-weight: 500; font-size: 22px; letter-spacing: 3.5px;"
                  class="col-lg-12 col-md-12 col-12"
                >
                  Good to see you again
                </div>
                <p style="text-align: center; display: inline-block; width: 100%; line-height: 30px;letter-spacing: 1.5px;">Please login to your account.</p>
              </div>
              <div class="row">
                <div style="margin-top: 15px" class="col-lg-6 col-md-6 col-6">
                  <button
                    style="
                      background: #3b5998;
                      width: 100%;
                      letter-spacing: 1.5px;
                    "
                    class="btn1"
                    v-on:click="loginWithFacebook"
                  >
                    <i
                      style="float: left; font-size: 22px"
                      class="fab fa-facebook"
                    ></i
                    >Facebook
                    <img
                      v-if="loadingFacebook"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                  <br />
                </div>

                <div style="margin-top: 15px" class="col-lg-6 col-md-6 col-6">
                  <button
                    style="
                      background: #dd4b39;
                      width: 100%;
                      letter-spacing: 1.5px;
                    "
                    class="btn1"
                    v-on:click="loginWithGoogle"
                  >
                    <i
                      style="float: left; font-size: 22px"
                      class="fab fa-google"
                    ></i
                    >Google
                    <img
                      v-if="loadingGoogle"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                  <br />
                </div>
              </div>

              <div class="row">
                <div style="margin-top: 15px" class="col-lg-6 col-md-6 col-6">
                  <button
                    style="
                      background: #55acee;
                      width: 100%;
                      letter-spacing: 1.5px;
                    "
                    class="btn1"
                    v-on:click="loginWithTwitter"
                    :disabled="isDisabledTwitter"
                  >
                    <i
                      style="float: left; font-size: 22px"
                      class="fab fa-twitter"
                    ></i
                    >Twitter
                    <img
                      v-if="loadingTwitter"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                  <br />
                </div>

                <div style="margin-top: 15px" class="col-lg-6 col-md-6 col-6">
                  <button
                    style="
                      background: #007bb5;
                      width: 100%;
                      letter-spacing: 1.5px;
                    "
                    class="btn1"
                    v-on:click="loginWithLinkedin"
                    :disabled="isDisabledLinkedin"
                  >
                    <i
                      style="float: left; font-size: 22px"
                      class="fab fa-linkedin"
                    ></i
                    >LinkedIn
                    <img
                      v-if="loadingLinkedin"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                  <br />
                </div>
              </div>

              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <hr
                    style="background-color: #9f9f9f; height: 1px; width: 100%"
                  />
                </div>
                <div class="col-lg-12 col-md-12 col-12" style="text-align: center;     margin-top: -37px;">
                <div
                  class=""
                  style="
                   display: inline-block;
                    width: 38px;
                    line-height: 14px;
                    border: 1px solid rgb(146, 146, 146);
                    height: 37px;
                    border-radius: 50px;
                    padding: 10px 8px;
                    background: rgb(255, 255, 255);
                    margin-top: -37px;
                    text-align: center;
                    z-index: 999;
                    color: rgb(146, 146, 146);
                    font-size: 14px;
                    font-weight: 600;
                  "
                >
                  OR
                </div>
                </div>
                <div class="col-lg-12 col-md-12 col-12 pt-3 pb-3" style="text-align: center">
                  <span
                    style="
                      letter-spacing: 1.5px;
                      color: #929292;
                      line-height: 46px;
                      font-size: 14px;
                      font-weight: 600;
                      line-height: 75px;
                    "
                    >Login With Email?</span
                  >
                </div>
                <!-- <div style="margin-top: 15px" class="col-lg-4 col-md-4 col-4">
                  <hr
                    style="background-color: #9f9f9f; height: 1px; width: 100%"
                  />
                </div> -->
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    style="border-radius: 15px"
                    v-model="user.email"
                    type="email"
                    @blur="validateEmail"
                    placeholder="Email"
                  />
                  <div style="margin-top: 5px" v-if="emailRequire">
                    <span style="color: red; letter-spacing: 1.5px"
                      >Email is required</span
                    >
                  </div>
                  <div style="margin-top: 5px" v-if="emailValidShow">
                    <span style="color: red; letter-spacing: 1.5px"
                      >Please write valid email</span
                    >
                  </div>
                </div>
              </div>
              <br />
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    style="border-radius: 15px"
                    v-model="user.password"
                    v-on:keyup.enter="login"
                    type="password"
                    placeholder="Password"
                  />
                  <div style="margin-top: 5px" v-if="passwordRequire">
                    <span style="color: red; letter-spacing: 1.5px"
                      >Password is required</span
                    >
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-6 col-md-6 col-6"
                >
                  <button
                    id="button"
                    style="
                      letter-spacing: 1.5px;
                      float: left;
                      font-size: 1em;
                      width: 7em;
                      border-radius: 15px;
                      color: rgb(255, 131, 84);
                      border-color: rgb(255, 131, 84);
                      font-weight: 500;
                      margin-left: -15px;
                    "
                    type="button"
                    class="btn btn-outline-danger"
                    v-on:keyup.enter="login"
                    v-on:click="login"
                  >
                    Login
                    <img
                      v-if="loading"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                </div>
                 <div style="margin-top: 15px" class="col-lg-6 col-md-6 col-6" >
                  <span
                    v-on:click="forgotPassword"
                    style="cursor: pointer;
                      font-weight: 400;
                      float: right;
                      color: #3B5998;
                      font-size: 16px;
                      margin-left: 5px;
                      padding: 5px 0; 
                      margin-right: -15px;
                    ">Forgot your password?</span>
                    </div>
              </div>
              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-11 col-md-11 col-11"> 
                  <span style="text-align: left; width: 100%; display: inline-block; color: #929292; font-size: 16px; }">Don't have an account?
                  <span
                    v-on:click="register"
                    style="
                      cursor: pointer;
                      font-weight: 400;
                      color: #55acee;
                      font-size: 16px;
                      color:#3B5998;
                    "
                    > Sign up
                  </span>
                  </span>
                </div>
              </div>
              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-12 col-md-12 col-12"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import crypto from "crypto";
//import OAuth from 'oauth-1.0a';
import axios from "axios";

import AuthService from "../services/auth.service";
import User from "../models/user";
//import { initFbsdk } from '@/config/facebook_oAuth.js'
import { initFbsdk } from "@/config/facebook_oAuth.js";

export default {
  name: "login",
  data: function () {
    return {
      loading: false,
      emailRequire: false,
      emailValidShow: false,
      passwordRequire: false,
      user: new User("", "", "", "", ""),
      loadingFacebook: false,
      loadingGoogle: false,
      loadingTwitter: false,
      isDisabledTwitter: false,
      loadingLinkedin: false,
      isDisabledLinkedin: false,
    };
  },
  mounted() {
    initFbsdk();
  },
  methods: {
    handleKeyDown(e) {
      if (e.code === "Enter") {
        console.log("enter pressed");
        this.login();
      }
    },
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)
      ) {
        this.emailValidShow = false;
      } else {
        this.emailValidShow = true;
        return;
      }
    },
    forgotPassword() {
      this.$router.push("/forgot-password");
    },
    register() {
      this.$router.push("/join");
    },
    login() {
      if (this.user.email == "") {
        this.emailRequire = true;
        return;
      } else {
        this.emailRequire = false;
      }
      if (this.user.password == "") {
        this.passwordRequire = true;
        return;
      } else {
        this.passwordRequire = false;
      }
      if (this.emailValidShow) {
        return;
      }
      // post
      this.loading = true;
      AuthService.login(this.user).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          this.loading = false;
          if (response.data.jwt) {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$store.commit('checkLoggedIn')
            Vue.$toast.success(response.data.message, {
              duration: 2000,
            });
            let loginRedirect = localStorage.getItem("loginRedirect"); //alert('loginRedirect:'+loginRedirect);
            if (loginRedirect == "" || loginRedirect == null)
              this.$router.push("/my-account");
            else this.$router.push(loginRedirect);
          }
        },
        (error) => {
          this.loading = false;
          Vue.$toast.error(error.response.data.message, {
            duration: 2000,
          });
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          let id_token = GoogleUser.getAuthResponse().id_token;
          this.loadingGoogle = true;
          AuthService.glogin(id_token).then(
            // eslint-disable-next-line no-unused-vars
            (response) => {
              this.loadingGoogle = false;
              if (response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
                Vue.$toast.success(response.data.message, {
                  duration: 2000,
                });
                let loginRedirect = localStorage.getItem("loginRedirect");
                if (loginRedirect == "" || loginRedirect == null)
                  this.$router.push("/my-account");
                else this.$router.push(loginRedirect);
              }
            },
            (error) => {
              this.loadingGoogle = false;
              Vue.$toast.error(error.response.data.message, {
                duration: 2000,
              });
              this.content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
          //
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loginWithFacebook() {
      window.FB.login(
        (response) => {
          let accessToken = response.authResponse.accessToken;
          let userId = response.authResponse.userId;
          //
          // post
          this.loadingFacebook = true;
          AuthService.flogin(accessToken, userId).then(
            // eslint-disable-next-line no-unused-vars
            (response) => {
              this.loadingFacebook = false;
              if (response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
                Vue.$toast.success(response.data.message, {
                  duration: 2000,
                });
                let loginRedirect = localStorage.getItem("loginRedirect");
                if (loginRedirect == "" || loginRedirect == null)
                  this.$router.push("/my-account");
                else this.$router.push(loginRedirect);
              }
            },
            (error) => {
              this.loadingFacebook = false;
              Vue.$toast.error(error.response.data.message, {
                duration: 2000,
              });
              this.content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
          //
        },
        { scope: "email" }
      );
    },
    loginWithTwitter() {
      //console.log('loginWithTwitter');
      this.loadingTwitter = true;
      this.isDisabledTwitter = true;

      AuthService.tloginToken().then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          this.loadingTwitter = false;
          this.isDisabledTwitter = false;
        },
        (error) => {
          localStorage.setItem(
            "oauth_token",
            decodeURIComponent(error.response.data.oauth_token)
          );
          localStorage.setItem(
            "oauth_token_secret",
            decodeURIComponent(error.response.data.oauth_token_secret)
          );
          window.location = decodeURIComponent(error.response.data.url);
        }
      );
    },
    loginWithLinkedin() {
      this.loadingLinkedin = true;
      this.isDisabledLinkedin = true;

      var oauth_link_linkedin = localStorage.getItem("oauth_link_linkedin");
      if (oauth_link_linkedin == "" || oauth_link_linkedin == null) {
        var linkedin_state = "flooop_" + Math.floor(Math.random() * 101);
        localStorage.setItem("linkedin_state", linkedin_state);

        AuthService.lloginAuthLink(linkedin_state).then(
          // eslint-disable-next-line no-unused-vars
          (response) => {
            this.loadingLinkedin = false;
            this.isDisabledLinkedin = false;
          },
          (error) => {
            localStorage.setItem(
              "oauth_link_linkedin",
              decodeURIComponent(error.response.data.url)
            );
            window.location = decodeURIComponent(error.response.data.url);
          }
        );
      } else {
        window.location = oauth_link_linkedin;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.handleKeyDown); //will attach the event listener to the whole window when the component is created
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyDown); //will detach the event listener once the component is destroyed
  },
};
</script>
<style>
.btn1 {
  border: none;
  border-radius: 15px;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
