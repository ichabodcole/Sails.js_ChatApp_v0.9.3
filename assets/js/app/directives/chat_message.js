chatApp.directive('chatMessage', function() {
  var directiveObj = {
    restrict: 'A',
    transclude: true,
    scope:{
      username: '@',
      userId: '@'
    },
    templateUrl: 'message.html'
  };

  return directiveObj;
});