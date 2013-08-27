(function(){
	'use strict';

	chatApp.directive('preventDefault', function(){
		return function (scope, element, attrs) {
			element.bind('click', function(e){
				e.preventDefault();
			})
		}
	});
}());