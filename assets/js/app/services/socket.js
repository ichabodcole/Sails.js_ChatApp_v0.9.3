define(['angular', 'io'], function(ng, io){
  'use strict';

	// Code taken from example at http://briantford.com/blog/angular-socket-io.html
	var module = angular.module('chatApp.services');

	module.factory('socket', function($rootScope){
		var socket = io.connect();

		return {
			on: function(eventName, callback) {
				socket.on(eventName, function(){
					var args = arguments;
					$rootScope.$apply(function(){
						callback.apply(socket, args);
					});
				});
			},

			emit: function(eventName, data, callback){
				socket.emit(eventName, data, function(){
					var args = arguments;
					$rootScope.$apply(function(){
						if (callback) {
							callback.apply(socket, args);
						}
					});
				});
			}
		};
	});

	return module;
});