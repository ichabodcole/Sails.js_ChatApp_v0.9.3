define(['app'], function(app){
  'use strict';

  app.service('messageValidator', function(errorHandler) {
    this.isValid = function (message) {
      if (message){
        return true;
      } else {
        errorHandler.setError("A username and password is required");
      }
    };
  });

  return app;
});