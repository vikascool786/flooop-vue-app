import axios from 'axios';
import Vue from "vue";
// const API_URL = 'https://answebtechnologies.in/flooopadmin/api/';
const API_URL = 'http://sh009.hostgator.tempwebhost.net/~a1610nqz/flooopadmin/api/';
// const API_URL = 'http://localhost/flooopadmin/api/';

class AuthService {

  login(user) {
    var form = new FormData();
    form.append("email", user.email);
    form.append("password", user.password);
    return axios({
        method: "post",
        url: API_URL + 'user/login.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  glogin(id_token) {
    var form = new FormData();
    form.append("id_token", id_token);
    return axios({
        method: "post",
        url: API_URL + 'user/glogin.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  flogin(accessToken,userId) {
    var form = new FormData();
    form.append("accessToken", accessToken);
    form.append("userId", userId);
    return axios({
        method: "post",
        url: API_URL + 'user/flogin.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  tloginToken(){
    return axios({
      method: "post",
      url: API_URL +'twitter/request_token.php',
      //data: form,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  }
  tlogin(oauth_token,oauth_verifier,session_oauth_token,session_oauth_token_secret) {
    var form = new FormData();
    form.append("oauth_token", oauth_token);
    form.append("oauth_verifier", oauth_verifier);
    form.append("session_oauth_token", session_oauth_token);
    form.append("session_oauth_token_secret", session_oauth_token_secret);
    return axios({
        method: "post",
        url: API_URL +'user/tlogin.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  lloginAuthLink(linkedin_state){
    var form = new FormData();
    form.append("linkedin_state", linkedin_state);
    return axios({
      method: "post",
      url: API_URL +'user/llogin_oauth_link.php',
      data: form,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  }
  llogin(code,state,session_state) {
    var form = new FormData();
    form.append("code", code);
    form.append("state", state);
    form.append("session_state", session_state);
    return axios({
        method: "post",
        url: API_URL +'user/llogin.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  isLoggedIn()
  {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    if (loginUser != undefined && loginUser != null) {
      return true;
    } else {
      return false;
    }
  }

  forgotPassword(user) {
    var form = new FormData();
    form.append("email", user.email);
    return axios({
        method: "post",
        url: API_URL + 'user/forgot_password.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  checkResetPassword(code){
    var form = new FormData();
    form.append("code", code);
    return axios({
        method: "post",
        url: API_URL + 'user/check_reset_password.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  resetPassword(user) {
    var form = new FormData();
    form.append("code", user.code);
    form.append("password", user.password);
    form.append("password_confirm", user.confirmPassword);
    return axios({
        method: "post",
        url: API_URL + 'user/reset_password.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }

  changePassword(user) {

    if(this.isLoggedIn == false)
    {
      Vue.$toast.warning("Login require", {
        duration: 2000
      });
      return;
    }
    let loginUser = JSON.parse(localStorage.getItem('user'));
    //
    var form = new FormData();
    form.append("jwt", loginUser.jwt);
    form.append("password", user.password);
    form.append("password_confirm", user.confirmPassword);
    form.append("password_old", user.oldPassword);
    return axios({
        method: "post",
        url: API_URL + 'user/change_password.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.$router.push('/login');
  }

  register(user) {
    var form = new FormData();
    form.append("firstName", user.firstName);
    form.append("lastName", user.lastName);
    form.append("email", user.email);
    return axios({
        method: "post",
        url: API_URL + 'user/create.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }

  getUser(id) {
    var form = new FormData();
    form.append("id", id);
    return axios({
        method: "post",
        url: API_URL + 'user/read_single.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }

}

export default new AuthService();
