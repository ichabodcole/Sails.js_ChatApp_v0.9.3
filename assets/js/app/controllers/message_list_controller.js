define(['angular', 'app'], function(ng, app){
  'use strict';

  app.controller('MessageListController', function($scope, socket, socketHttp, messagesResource, messageValidator, errorHandler) {

    var updateMessages = function updateMessages() {
      $scope.messages = messagesResource.query();
    };

    $scope.test = function () {
      console.log("test");
    }

    $scope.destroy = function (obj) {
      var messageId = obj.messageId;
      var destroy = messagesResource.destroy(messageId);

      errorHandler.showErrors();
    }

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

    socket.on('message', function(res){
      updateMessages();
    });

    // Load in the messages
    socketHttp.get('/messages', function(res){
      $scope.messages = res;
    });
  });

  return app;
});