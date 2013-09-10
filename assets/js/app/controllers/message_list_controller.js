(function() {
  'use strict';

  chatApp.controller('MessageListController', function($scope, $filter, socket, socketHttp, messagesResource, messageValidator, errorHandler) {

    var createMessage = function (resObj){
      var messageObj = resObj.data;
      $scope.messages.push(messageObj);
    }

    var updateMessage = function (resObj){
      var messageObj = resObj.data;
      console.log(messageObj);
    }

    var destroyMessage = function (resObj){
      var messageId = resObj.id;
      var messageIndex = getIndexById($scope.messages, messageId);
      $scope.messages.splice(messageIndex, 1);
    }

    var getIndexById = function(array, id){
      return getIndexByAttr(array, 'id', id);
    }

    var getIndexByAttr = function(array, attr, value){
      var itemIndex = void 0;
      array.forEach(function(element, index, array){
        if(element[attr] === value){
          itemIndex = index;
        }
      });
      return itemIndex;
    }

    // create an actions object that points our http verbs
    // to functions.
    var actions = {
      create: createMessage,
      update: updateMessage,
      destroy: destroyMessage,
      defaultAction: function(message){
        console.log('no action found', message);
      }
    }

    // Update the list of messages anytime a message
    // is emitted from the server.
    socket.on('message', function(message){
      var verb = message.verb;

      /**
      * Check to see if a corrosponding http verb exists in our
      * actions object, if it does execute the function
      * and if not trigger the default action.
      **/
      if(actions[verb]){
        actions[verb](message);
      }else{
        actions.defaultAction(message);
      }
    });

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

    // Load in the messages.
    // Need to fetch the first set with socket to
    // subscribe to any events sent to the messages resource.
    socketHttp.get('/messages', function(res){
      $scope.messages = res;
    });
  });
}());