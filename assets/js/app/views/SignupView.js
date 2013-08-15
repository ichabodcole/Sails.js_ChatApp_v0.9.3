var chatApp = window.chatApp || {};

chatApp.SignupView = chatApp.AuthBaseView.extend({
  el: $('#signup'),

  events: {
    'click #signupButton': 'onClick'
  },

  initialize: function() {
    this.data = null;
    this.username = null;
    this.password = null;
    this.confirmPassword = null;
    this.path = '/signup';
  },

  setValues: function(){
    this.username = $("#signupName").val();
    this.password = $("#signupPassword").val();
    this.confirmPassword = $("#signupConfirmPassword").val();
  },

  setData: function() {
    this.data = { username: this.username, password: this.password };
  },

  isValid: function() {
    if (this.username && this.password) {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        this.setError("Passwords don't match");
      }
    } else {
      this.setError("A username and password is required");
    }
    return false;
  }
});