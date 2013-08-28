define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.services', []);

  module.factory('errorHandler', function(){
    var factory = {};

    factory.setError = function(errorMessage) {
      this.errors = this.errors || [];
      this.errors.push(errorMessage);
    };

    factory.showErrors = function() {
      if(this.errors) {
        var errorMsg = '';
        angular.forEach(this.errors, function(error, index){
          errorMsg += error + '\n';
        });
        alert(errorMsg);
        this.errors = null;
      }
    };

    return factory;
  });

  return module;
});