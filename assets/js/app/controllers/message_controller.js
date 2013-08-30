define(['app'], function(app){
	'use strict';

  app.controller('MessageController', function($scope, $routeParams, messagesResource, errorHandler){
  	var messageId = $routeParams.messageId;
  	$scope.message = messagesResource.get(messageId);
  	errorHandler.showErrors();
  });

  return app;
});