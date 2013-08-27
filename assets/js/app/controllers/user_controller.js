(function(){
  'use strict';

  chatApp.controller('UserController', function($scope, $routeParams, messagesResource){

  	var userId = $routeParams.userId;
  	var userMessages = messagesResource.getByUserId(userId);
  	$scope.messages = userMessages;
  	userMessages.$then(function success (res) {
  		$scope.username = res.data[0].username;
  	});
  });
}());