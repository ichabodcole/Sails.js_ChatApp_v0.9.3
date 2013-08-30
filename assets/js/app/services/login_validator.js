define(['app'], function(app){
  'use strict';

  app.service('loginValidator', function(errorHandler) {
    this.isValid = function (username, password) {
      if (username && password) {
          return true;
      } else {
        errorHandler.setError("A username and password is required");
      }
      return false;
    };
  });

  return app;
});