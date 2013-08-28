define(['angular', 'app'], function(ng, app){
 'use strict';

  app.controller('LoginController', function($scope, userResource, loginValidator, errorHandler) {

    $scope.buttonClick = function() {
      var username = $scope.loginName;
      var password = $scope.loginPassword;

      if (loginValidator.isValid(username, password)){
        var data = {username: username, password: password};
        var path = '/login';
        userResource.send(path, data);
      }

      errorHandler.showErrors();
    };
  });

  return app;
});