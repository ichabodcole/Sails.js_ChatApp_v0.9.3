define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.services');

  module.service('signupValidator', function(errorHandler){
    this.isValid = function (username, password, confirmPassword) {
      if (username && password) {
        if (password === confirmPassword) {
          return true;
        } else {
          errorHandler.setError("Passwords don't match");
        }
      } else {
        errorHandler.setError("A username and password is required");
      }
      return false;
    };
  });

  return module;
});