define(['angular'], function(angular){
  'use strict';
  var module = angular.module('chatApp.controllers');

  module.controller('SignupController', function($scope, errorHandler, signupValidator, userResource) {

    $scope.buttonClick = function() {
      var username = $scope.signupName;
      var password = $scope.signupPassword;
      var confirmPassword = $scope.signupConfirmPassword;

      if (signupValidator.isValid(username, password, confirmPassword)){
        var data = {username: username, password: password};
        var path = '/signup';
        userResource.send(path, data);
      }

      errorHandler.showErrors();
    };
  });

  return module;
});

