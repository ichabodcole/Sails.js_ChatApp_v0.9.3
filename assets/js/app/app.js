// define(['angular',
//         'angular-resource',
//         ''], function(angularPH, ngResourcePH){
//   'use strict';
//   var chatApp = angular.module('chatApp', ['ngResource']);

//   chatApp.config(function($routeProvider){
//     $routeProvider.when('/chat', {
//       templateUrl: '/partials/chat.html',
//       controller: 'MessageListController'
//     })
//     .when('/chat/:messageId', {
//       templateUrl: '/partials/message_detail.html',
//       controller: 'MessageController'
//     })
//     .when('/users/:userId', {
//       templateUrl: '/partials/user_detail.html',
//       controller: 'UserController'
//     });
//   });

//   return chatApp;
// });
define(['angular', 'angular-resource'], function(){
  var app = angular.module('chatApp', ['ngResource', 'chatApp.controllers', 'chatApp.services']);
  return app;
});