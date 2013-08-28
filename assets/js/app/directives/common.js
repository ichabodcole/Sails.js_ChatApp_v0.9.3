define(['angular'], function(angular){
  'use strict';
  var module = angular.module('chatApp.directives');

	module.directive('preventDefault', function(){
		return function (scope, element, attrs) {
			element.bind('click', function(e){
				e.preventDefault();
			});
		};
	});

	return module;
});