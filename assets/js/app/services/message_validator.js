define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.services');

  module.service('messageValidator', function(errorHandler) {
    this.isValid = function (message) {
      if (message){
        return true;
      } else {
        errorHandler.setError("A username and password is required");
      }
    };
  });

  return module;
});