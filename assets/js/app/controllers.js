'use strict';

var chatApp = chatApp || angular.module('chatApp', []);

chatApp.controller('LoginController', function($scope, $http, sendUserData, errorHandler) {
  var isValid = function(username, password) {
    if (username && password) {
        return true;
    } else {
      errorHandler.setError("A username and password is required");
    }
    return false;
  };

  $scope.buttonClick = function() {
    var username = $scope.loginName;
    var password = $scope.loginPassword;

    if (isValid(username, password)){
      var data = {username: username, password: password};
      var path = '/login';
      sendUserData.send(path, data);
    } else {
      errorHandler.showErrors();
    }
  };
});

chatApp.controller('SignupController', function($scope, $http, sendUserData, errorHandler) {

  var isValid = function(username, password, confirmPassword) {
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

  $scope.buttonClick = function() {
    var username = $scope.signupName;
    var password = $scope.signupPassword;
    var confirmPassword = $scope.signupConfirmPassword;

    if (isValid(username, password, confirmPassword)){
      var data = {username: username, password: password};
      var path = '/signup';
      sendUserData.send(path, data);
    } else {
      errorHandler.showErrors();
    }
  };
});

chatApp.controller('MessageController', function($scope, Messages, errorHandler) {
  var isValid = function (message) {
    if (message){
      return true;
    } else {
      errorHandler.setError("A username and password is required");
    }
  };

  $scope.buttonClick = function (){
    var message = $scope.message;

    if(isValid(message)){
      var data = { message: message };
      Messages.send(data).success(function(res, status, headers, config) {
        updateMessages();
      });
    } else {
      errorHandler.showErrors();
    }
  };

  var updateMessages = function() {
    Messages.get().success(function(res, status, headers, config){
      $scope.messages = res;
    });
  };

  updateMessages();
});