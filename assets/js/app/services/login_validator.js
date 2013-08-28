define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.services');

  module.service('loginValidator', function(errorHandler) {
    this.isValid = function (username, password) {
      if (username && password) {
          return true;
      } else {
        errorHandler.setError("A username and password is required");
      }
      return false;
    };
  });

  return module;
});