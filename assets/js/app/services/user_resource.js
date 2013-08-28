define(['angular'], function(){
  'use strict';
  var module = angular.module('chatApp.services');

  module.service('userResource', function($http, $window) {
    this.send = function (path, data){
      $http.post(path, data)
      .success(function(res, status, headers, config) {
        $window.location = '/chat';
      })
      .error(function(res, status, headers, config) {
        // errorHandler.setError("Error: " + res.error);
        // errorHandler.showErrors();
      });
    };
  });

  return module;
});