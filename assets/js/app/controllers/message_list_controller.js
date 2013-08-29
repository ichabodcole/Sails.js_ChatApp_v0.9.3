(function() {
  'use strict';

  chatApp.controller('MessageListController', function($scope, socket, socketHttp, messagesResource, messageValidator, errorHandler) {

    var updateMessages = function updateMessages() {
      socketHttp.get('/messages', function(res){
        $scope.messages = res;
      });
      // messagesResource.query();
    };

    $scope.destroy = function (obj) {
      var messageId = obj.messageId;
      var destroy = messagesResource.destroy(messageId);

      errorHandler.showErrors();
    };

    $scope.buttonClick = function (){
      var message = $scope.message;

      if(messageValidator.isValid(message)){
        var data = { message: message };
        var save = messagesResource.save(data);
        save.$then(function success(){
          $scope.message = '';
        });
      }

      errorHandler.showErrors();
    };

    // Load in the messages when the socket has connected.
    socket.on('connect', function(){
      updateMessages();
    })

    socket.on('message', function(message){
      updateMessages();
    });
  });
}());