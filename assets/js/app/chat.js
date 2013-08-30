define(['angular',
        'services/error_handler',
				'services/message_resource',
				'services/message_validator',
				'services/socket',
				'services/socket_http',
				'controllers/message_list_controller',
				'controllers/message_controller',
        'controllers/user_controller',
        'directives/chat_message',
        'directives/common'], function(angular){

  'use strict';

  var chatApp = angular.module('chatApp');

  chatApp.config(function($routeProvider){
    $routeProvider.when('/chat', {
      templateUrl: '/partials/chat.html',
      controller: 'MessageListController'
    })
    .when('/chat/:messageId', {
      templateUrl: '/partials/message_detail.html',
      controller: 'MessageController'
    })
    .when('/users/:userId', {
      templateUrl: '/partials/user_detail.html',
      controller: 'UserController'
    });
  });

  return chatApp;
});