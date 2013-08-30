(function() {
  'use strict';

  chatApp.controller('MessageListController', function($scope, socket, socketHttp, messagesResource, messageValidator, errorHandler) {

    var updateMessages = function updateMessages() {
      $scope.messages = messagesResource.query();
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

    // Update the list of messages anytime a message
    // is emitted from the server.
    socket.on('message', function(message){
      updateMessages();
    });

    // Load in the messages.
    // Need to fetch the first set with socket to
    // subscribe to any events sent to the messages resource.
    socketHttp.get('/messages', function(res){
      $scope.messages = res;
    });
  });
}());