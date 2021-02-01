<template>
  <div class="level-item has-text-centered">
    <div
      style="width: 90%"
      v-if="forgotPasswordSection"
      class="ads-grid py-sm-6 py-6"
    >
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
                  style="
                    color: #929292;
                    letter-spacing: 1.5px;
                    text-align: center;
                    font-weight: 500;
                    font-size: 20px;
                  "
                  class="col-lg-12 col-md-12 col-12"
                >
                  Reset your password
                </div>
                <p
                  style="
                    line-height: 18px;
                    font-size: 14px;
                    color: #929292;
                    margin-top: 20px;
                  "
                >
                  Enter the email address associated with your account to
                  receive a link reset your password.
                </p>
              </div>

              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <div class="control">
                    <input
                      class="input"
                      style="border-radius: 15px; text-align: center"
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
              </div>

              <!-- <div class="row">
                <div style="margin-top:15px;" class="col-lg-12 col-md-12 col-12">
                    <button id="button" 
                      style="letter-spacing:1.5px;float:left;font-size: 1em;width: 7em;border-radius:15px;color: rgb(255, 131, 84);border-color: rgb(255, 131, 84);font-weight: 500;"
                      type="button"
                      class="btn btn-outline-danger"
                      v-on:click = "forgotPassword"
                  >Send Code 
                   <img
                      v-if="loading"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                </div>
              </div> -->
              <div class="row">
                <div
                  style="margin-top: 15px; padding: 20px"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <span
                    v-on:click="resetPassword"
                    style="
                      cursor: pointer;
                      font-weight: 400;
                      color: rgb(85, 172, 238);
                      font-size: 16px;
                      text-align: center;
                      border: 1px solid rgb(85, 172, 238);
                      border-radius: 22px;
                      padding: 10px;
                    "
                    >Reset Password</span
                  >
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

    <div style="width: 90%" v-if="checkYourEmail" class="ads-grid py-sm-6 py-6">
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
                  style="
                    color: #929292;
                    letter-spacing: 1.5px;
                    text-align: center;
                    font-weight: 500;
                    font-size: 20px;
                  "
                  class="col-lg-12 col-md-12 col-12"
                >
                  Reset your password
                </div>
                <p
                  style="
                    line-height: 18px;
                    font-size: 14px;
                    color: #929292;
                    margin-top: 20px;
                  "
                >
                  Enter the email address associated with your account to
                  receive a link reset your password.
                </p>
              </div>

              <div class="row">
                <div
                  style="margin-top: 15px"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <div class="control">
                    <input
                      class="input"
                      style="border-radius: 15px; text-align: center"
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
              </div>

              <!-- <div class="row">
                <div style="margin-top:15px;" class="col-lg-12 col-md-12 col-12">
                    <button id="button" 
                      style="letter-spacing:1.5px;float:left;font-size: 1em;width: 7em;border-radius:15px;color: rgb(255, 131, 84);border-color: rgb(255, 131, 84);font-weight: 500;"
                      type="button"
                      class="btn btn-outline-danger"
                      v-on:click = "forgotPassword"
                  >Send Code 
                   <img
                      v-if="loading"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                </div>
              </div> -->
              <div class="row">
                <div
                  style="margin-top: 15px; padding: 20px"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <span
                    v-on:click="resetPassword"
                    style="
                      cursor: pointer;
                      font-weight: 400;
                      color: rgb(85, 172, 238);
                      font-size: 16px;
                      text-align: center;
                      border: 1px solid rgb(85, 172, 238);
                      border-radius: 22px;
                      padding: 10px;
                    "
                    >Reset Password</span
                  >
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
import AuthService from "../services/auth.service";
import User from "../models/user";
export default {
  name: "login",
  data: function () {
    return {
      loading: false,
      emailRequire: false,
      emailValidShow: false,
      user: new User("", "", "", "", ""),
      checkYourEmail: false,
      forgotPasswordSection: true,
    };
  },
  methods: {
    resetPassword() {
      this.$router.push("/reset-password");
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
      if (this.user.email == "") {
        this.emailRequire = true;
        return;
      } else {
        this.emailRequire = false;
      }
      // post
      this.loading = true;
      AuthService.forgotPassword(this.user).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          this.loading = false;
          Vue.$toast.success(response.data.message, {
            duration: 2000,
          });
          this.user = new User("", "", "", "", "");
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
  },
};
</script>
<style>
.btn1 {
  border: none;
  border-radius: 5 px;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
