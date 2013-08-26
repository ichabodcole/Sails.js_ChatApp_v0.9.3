chatApp.directive('chatMessage', function() {
  var directiveObj = {
    restrict: 'A',
    transclude: true,
    scope:{
      username: '@'
    },
    template: '<p ng-transclude><b>{{ username }}: </p>'
  };

  return directiveObj;
});