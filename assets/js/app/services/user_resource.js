define(['angular', 'app'], function(ng, app){
  'use strict';

  app.service('userResource', function($http, $window, errorHandler) {
    this.send = function (path, data){
      $http.post(path, data)
      .success(function(res, status, headers, config) {
        $window.location = '/chat';
      })
      .error(function(res, status, headers, config) {
        errorHandler.setError("Error: " + res.error);
        errorHandler.showErrors();
      });
    };
  });

  return app;
});