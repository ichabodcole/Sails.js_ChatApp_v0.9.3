define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.controllers');

  module.controller('MessageController', function($scope, $routeParams, messagesResource, errorHandler){
  	var messageId = $routeParams.messageId;
  	$scope.message = messagesResource.get(messageId);
  	errorHandler.showErrors();
  });

  return module;
});