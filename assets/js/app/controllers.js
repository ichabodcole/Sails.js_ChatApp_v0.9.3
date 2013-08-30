(function(){
  'use strict';

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

  chatApp.controller('MessageController', function($scope, socket, socketHttp, messagesResource, messageValidator, errorHandler) {

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
        });
      }

      errorHandler.showErrors();
    };

    socket.on('message', function(msg) {
      updateMessages();
    });

    // Load in the messages
    socketHttp.get('/messages', function(res){
      $scope.messages = res;
    })
  });
}());