define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.controllers');

  module.controller('UserController', function($scope, $routeParams, messagesResource){

  	var userId = $routeParams.userId;
  	var userMessages = messagesResource.getByUserId(userId);
  	$scope.messages = userMessages;
  	userMessages.$then(function success (res) {
  		$scope.username = res.data[0].username;
  	});
  });

  return  module;
});