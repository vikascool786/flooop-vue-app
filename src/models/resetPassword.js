export default class ResetPassword {
    constructor(code, password, confirmPassword, oldPassword) {
      this.code = code;
      this.password = password;
      this.oldPassword = oldPassword;
      this.confirmPassword = confirmPassword;
    }
  }
  