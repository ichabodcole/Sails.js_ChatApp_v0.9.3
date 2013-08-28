define(['angular', 'app'], function(ng, app){
  'use strict';

  app.controller('MessageListController', function($scope, messagesResource, messageValidator, errorHandler) {

    var updateMessages = function updateMessages() {
      $scope.messages = messagesResource.query();
    };

    $scope.test = function () {
      console.log("test");
    }

    $scope.destroy = function (obj) {
      var messageId = obj.messageId;
      var destroy = messagesResource.destroy(messageId);

      destroy.$then(function success(res) {
        updateMessages();
      });

      errorHandler.showErrors();
    }

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

  return app;
});