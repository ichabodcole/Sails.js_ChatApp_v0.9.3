define(['jquery', 'views/AuthBaseView'], function($, AuthBaseView) {

  // SignupView extends AuthBaseView which contains methods for
  // posting and error handling.
  var SignupView = AuthBaseView.extend({
    el: $('#signup'),

    events: {
      'click #signupButton': 'onClick'
    },

    initialize: function() {
      this.path = '/signup';
      this.resetData();
    },

    resetData: function() {
      this.data = null;
      this.username = null;
      this.password = null;
      this.confirmPassword = null;
    },

    // This method is used to setup instance data in AuthBaseView's post method
    setValues: function(){
      this.username = $("#signupName").val();
      this.password = $("#signupPassword").val();
      this.confirmPassword = $("#signupConfirmPassword").val();
    },

    // The data object is used in AuthBaseView's post method
    setData: function() {
      this.data = { username: this.username, password: this.password };
    },

    // This method is used for validating post data in AuthBaseView's post method
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

  return SignupView;
});