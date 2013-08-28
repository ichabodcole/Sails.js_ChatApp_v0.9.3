define(['angular', 'app'], function(ng, app){
	'use strict';

  app.controller('UserController', function($scope, $routeParams, messagesResource){

  	var userId = $routeParams.userId;
  	var userMessages = messagesResource.getByUserId(userId);
  	$scope.messages = userMessages;
  	userMessages.$then(function success (res) {
  		$scope.username = res.data[0].username;
  	});
  });

  return app;
});