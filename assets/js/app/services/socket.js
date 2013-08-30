define(['app', 'io'], function(app, io){
  'use strict';

	// Code taken from example at http://briantford.com/blog/angular-socket-io.html

	app.factory('socket', function($rootScope){
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

	return app;
});