define(['angular', 'app'], function(ng, app){
  'use strict';

  app.directive('chatMessage', function() {
    var directiveObj = {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope:{
        username: '@',
        userId: '@',
        messageId: '@',
        destroy: '&'
      },
      templateUrl: 'message.html'
    };

    return directiveObj;
  });

  return app;
});