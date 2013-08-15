var chatApp = window.chatApp || {};

chatApp.AuthBaseView = Backbone.View.extend({
  // _super: function(funcName) {
  //   return this.constructor.prototype[funcName].apply(this, _.rest(arguments));
  // },

  setValues: function() {
    // Implement on subclasses
  },

  setData: function() {
    // Implement on subclasses
  },

  isValid: function() {
    // Implement on subclasses
  },

  post: function(path, data) {
    _self = this;
    $.post(
      path,
      data,
      function () {
          window.location = "/chat";
      }
    ).fail(function(res){
      _self.setError("Error: " + res.getResponseHeader("error"));
      _self.showErrors();
    });
  },

  setError: function(errorMessage){
    this.errors = this.errors || [];
    this.errors.push(errorMessage);
  },

  showErrors: function() {
    if (this.errors) {
      var errorMsg = '';
      _.each(this.errors, function(error){
        errorMsg += error + '\n';
      });

      alert(errorMsg);
      this.errors = [];
    }
  },

  onClick: function() {
    this.setValues();
    if (this.isValid()) {
      this.setData();
      this.post(this.path, this.data);
    } else {
     this.showErrors();
   }
  }

});