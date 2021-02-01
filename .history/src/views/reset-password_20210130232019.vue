<template>
  <div class="level-item has-text-centered">
    <div style="width: 90%;" class="ads-grid py-sm-6 py-6">
      <div style="padding-right: 4vw;padding-left: 4vw;" class=" py-xl-4 py-lg-2">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-12"></div>

       
          <div class="col-lg-6 col-md-6 col-12">
            <div class="card" style="width: 100%;height:100%;padding:25px;">
              <div style="margin:14px;" class="row">
                <div
                  style="color:#929292;text-align: center;font-weight: 500;font-size: 20px;letter-spacing:1.5px;"
                  class="col-lg-12 col-md-12 col-12"
                >Reset Password</div>
              </div>
              <div v-if="showWaiting">Loading...</div>
              <div v-if="showLinkExpired">Link Expired</div>
               <div class="field" v-if="showResetForm">
        <div class="control">
          <input class="input" style="border-radius:15px;" v-model="user.password" type="password" placeholder="New Password"/>
         <div style="margin-top: 5px;" v-if = "passwordRequire">
         <span style="color:red;letter-spacing:1.5px;">Password is required</span>
        </div>
        </div>
      </div>

        <div class="field" v-if="showResetForm">
        <div class="control">
          <input class="input" style="border-radius:15px;" v-model="user.confirmPassword" type="password" placeholder="Confirm Password"/>
         <div style="margin-top: 5px;" v-if = "confirmPasswordRequire">
         <span style="color:red;letter-spacing:1.5px;">Confirm Password is required</span>
        </div>
         <div style="margin-top: 5px;" v-if = "confirmPasswordMatchRequire">
         <span style="color:red;letter-spacing:1.5px;">Confirm Password doesn't not match</span>
        </div>
        </div>
      </div>

               <div class="row" v-if="showResetForm">
                <div style="margin-top:15px;" class="col-lg-11 col-md-11 col-11">
                    <button id="button" 
                      style="letter-spacing:1.5px;float:left;font-size: 1em;width: 7em;border-radius:15px;color: rgb(255, 131, 84);border-color: rgb(255, 131, 84);font-weight: 500;"
                      type="button"
                      class="btn btn-outline-danger"
                      v-on:click = "resetPassword"
                  >Reset
                   <img
                      v-if="loading"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  </button>
                </div>
              </div>
    <div class="row">
                <div   v-on:click = "navigateToLogin" style="margin-top:15px;" class="col-lg-11 col-md-11 col-11">
                  <span
                    style="letter-spacing:1.5px;cursor:pointer;font-weight: 400;float:left;color: #55ACEE;font-size: 16px;"
                  >Login</span>
                </div>
              </div>
              <div class="row">
                <div style="margin-top:15px;" class="col-lg-12 col-md-12 col-12"></div>
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
import AuthService from '../services/auth.service';
import ResetPassword from '../models/resetPassword';
export default {
  name: "ResetPassword",
   data: function(){
       return {
           loading: false,
      codeRequire: false,
      passwordRequire: false,
      confirmPasswordRequire: false,
      confirmPasswordMatchRequire: false,
      showResetForm:false,
      showWaiting:true,
      showLinkExpired:false,
     user: new ResetPassword('', '', ''),
    }
  },
  methods:  {
    navigateToLogin()
    {
      this.$router.push('/login');
    },
    resetPassword()
    {
      this.user.code = this.$route.params.code;
      if (this.user.password == "") {
        this.passwordRequire = true;
        return;
      }
      else
      {
         this.passwordRequire = false;
      } 
      //
       if (this.user.confirmPassword == "") {
        this.confirmPasswordRequire = true;
        return;
      }
      else
      {
         this.confirmPasswordRequire = false;
      } 
       //
      if (this.user.confirmPassword != this.user.password) {
        this.confirmPasswordMatchRequire = true;
        return;
      }
      else
      {
         this.confirmPasswordMatchRequire = false;
      } 
       // post
       this.loading = true;
      AuthService.resetPassword(this.user).then(
      // eslint-disable-next-line no-unused-vars
      response => {
        this.loading = false;
          Vue.$toast.success(response.data.message, {
            duration: 2000
          });
          this.user = new ResetPassword('', '', '');
      },
      error => {
        this.loading = false;
           Vue.$toast.error(error.response.data.message, {
            duration: 2000
          });
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      });
    }
  },
  mounted() {
    var code = this.$route.params.code;
    const loadingComponent = this.$loading.open({
      container: null
    })
    AuthService.checkResetPassword(code).then(
      // eslint-disable-next-line no-unused-vars
      response => {
        this.showResetForm = true;
        this.showWaiting = false; 
        loadingComponent.close(); 
      },
      error => {
        loadingComponent.close();
           this.showLinkExpired = true;
           this.showWaiting = false;  
      });
  }
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
