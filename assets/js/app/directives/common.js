define(['app'], function(app){
	'use strict';

	app.directive('preventDefault', function(){
		return function (scope, element, attrs) {
			element.bind('click', function(e){
				e.preventDefault();
			})
		}
	});

	return app;
});