(function(){
  'use strict';

  chatApp.controller('MessageController', function($scope, $routeParams, messagesResource, errorHandler){
  	var messageId = $routeParams.messageId;
  	$scope.message = messagesResource.get(messageId);
  	console.log($scope.message);
  	// message.$then(function success(){
  	// 	$scope.messsage = message;
  	// });

  	errorHandler.showErrors();
  });
}());