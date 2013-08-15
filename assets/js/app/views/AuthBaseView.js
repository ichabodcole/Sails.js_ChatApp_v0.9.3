define(['backbone'], function(Backbone) {

  var AuthBaseView = Backbone.View.extend({

    setValues: function() {
      // Implement in subclasses
    },

    setData: function() {
      // Implement in subclasses
    },

    isValid: function() {
      // Implement in subclasses
    },

    resetData: function() {
      // Implement in subclasses
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
      this.resetData();
    },

    // Push error messages to the errors array
    setError: function(errorMessage){
      // if the errors array does not exist, create it.
      this.errors = this.errors || [];
      this.errors.push(errorMessage);
    },

    showErrors: function() {
      // check to see if errors exist
      if (this.errors) {
        var errorMsg = '';
        // Combine all error messages into a single string
        _.each(this.errors, function(error){
          errorMsg += error + '\n';
        });

        // Show an alert with that complete list of errors.
        alert(errorMsg);
        // reset the errors var to null
        this.errors = null;
      }
    },

    onClick: function() {
      // sets instance variables based on form fields
      this.setValues();
      // check to make sure values are valid
      if (this.isValid()) {
        // set the instances data object up
        this.setData();
        this.post(this.path, this.data);
      } else {
       this.showErrors();
     }
    }
  });

  return AuthBaseView;
});