(function(){
  'use strict';

  chatApp.service('messageValidator', function(errorHandler) {
    this.isValid = function (message) {
      if (message){
        return true;
      } else {
        errorHandler.setError("Please enter a message.");
      }
    };
  });
}());