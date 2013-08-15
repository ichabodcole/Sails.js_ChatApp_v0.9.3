var chatApp = window.chatApp || {};

chatApp.LoginView = chatApp.AuthBaseView.extend({
  el: $('#login'),

  events: {
    'click #loginButton': 'onClick',
  },

  initialize: function() {
    this.data = null;
    this.username = null;
    this.password = null;
    this.path = '/login';
  },

  setValues: function(){
    this.username = $("#loginName").val();
    this.password = $("#loginPassword").val();
  },

  setData: function() {
    this.data = { username: this.username, password: this.password };
  },

  isValid: function() {
    if (this.username && this.password) {
      return true;
    } else {
      this.setError("A username and password is required");
    }
    return false;
  }
});