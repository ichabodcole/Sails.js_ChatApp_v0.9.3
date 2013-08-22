(function(){
  'use strict';

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
}());