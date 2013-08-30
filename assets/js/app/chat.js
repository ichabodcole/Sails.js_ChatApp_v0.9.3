define(['app',
				'services/error_handler',
				'services/message_validator',
				'services/message_resource',
				'directives/chat_message',
				'directives/common',
				'controllers/message_list_controller',
				'controllers/message_controller',
				'controllers/user_controller'], function(app){

		'use strict';

	  app.config(function($routeProvider){
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

		return app;
});