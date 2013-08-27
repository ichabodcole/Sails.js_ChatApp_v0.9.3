var chatApp;

(function(){
  'use strict';
  chatApp = chatApp || angular.module('chatApp', ['ngResource']);

  chatApp.config(function($routeProvider){
    $routeProvider.when('/chat', {
      templateUrl: '/partials/chat.html',
      controller: 'MessageListController'
    })
    .when('/chat/:messageId', {
      templateUrl: '/partials/message_detail.html',
      controller: 'MessageController'
    })
    .when('/users', {
      templateUrl: '/partials/user_detail.html',
      controller: 'UserController'
    });
  });
}());
