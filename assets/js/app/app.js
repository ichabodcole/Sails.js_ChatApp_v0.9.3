define(['angular', 'angular-resource'], function(){

	var appName = 'chatApp';

	angular.module(appName + '.services', []);
	angular.module(appName + '.controllers', []);
	angular.module(appName + '.directives', []);
	var app = angular.module(appName, ['ngResource', 'chatApp.controllers', 'chatApp.services', 'chatApp.directives']);

  return app;
});