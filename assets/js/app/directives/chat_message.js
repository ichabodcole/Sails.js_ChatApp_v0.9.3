chatApp.directive('chatMessage', function() {
  var directiveObj = {
    restrict: 'A',
    template: '<p><b>{{ message.username }}: </b>{{ message.message }}</p>'
  };

  return directiveObj;
});