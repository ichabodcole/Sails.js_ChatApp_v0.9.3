'use strict';

var chatApp = chatApp || angular.module('chatApp', []);

chatApp.controller('LoginController', function($scope, userResource, loginValidator, errorHandler) {

  $scope.buttonClick = function() {
    var username = $scope.loginName;
    var password = $scope.loginPassword;

    if (loginValidator.isValid(username, password)){
      var data = {username: username, password: password};
      var path = '/login';
      userResource.send(path, data);
    }

    errorHandler.showErrors();
  };
});

chatApp.controller('SignupController', function($scope, userResource, signupValidator, errorHandler) {

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

chatApp.controller('MessageController', function($scope, messagesResource, messageValidator, errorHandler) {

  var updateMessages = function updateMessages() {
    $scope.messages = messagesResource.query();
  };

  $scope.buttonClick = function (){
    var message = $scope.message;

    if(messageValidator.isValid(message)){
      var data = { message: message };
      var save = messagesResource.save(data);
      save.$then(function success(){
        $scope.message = "";
        updateMessages();
      });
    }

    errorHandler.showErrors();
  };

  // Load in the messages
  updateMessages();
});