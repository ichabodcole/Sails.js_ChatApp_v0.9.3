define(['angular'], function(angular){
  'use strict';
  var module = angular.module('chatApp.directives');

  module.directive('chatMessage', function() {
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

  return module;
});