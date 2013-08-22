(function(){
  'use strict';

  chatApp.controller('SignupController', function($scope, userResource, signupValidator, errorHandler) {

    $scope.buttonClick = function() {
      var username = $scope.signupName;
      var password = $scope.signupPassword;
      var confirmPassword = $scope.signupConfirmPassword;

      if (signupValidator.isValid(username, password, confirmPassword)){
        var data = {username: username, password: password};
        var path = '/signup';
        userResource.send(path, data);
      }

      errorHandler.showErrors();
    };
  });
}());

