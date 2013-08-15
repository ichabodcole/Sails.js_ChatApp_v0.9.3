define(['views/AuthBaseView'], function(AuthBaseView) {

  // LoginView extends AuthBaseView which contains methods for
  // posting and error handling.
  var LoginView = AuthBaseView.extend({
    el: $('#login'),

    events: {
      'click #loginButton': 'onClick',
    },

    initialize: function() {
      this.path = '/login';
      this.resetData();
    },

    resetData: function() {
      this.data = null;
      this.username = null;
      this.password = null;
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

  return LoginView;
});