define(['angular',
				'angular-resource',
				'app',
				'services/error_handler',
				'services/login_validator',
				'services/signup_validator',
				'services/user_resource',
				'controllers/login_controller',
				'controllers/signup_controller'], function(){

		'use strict';
		angular.bootstrap(document, ['chatApp']);
});