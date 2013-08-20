'use strict';


function LoginController($scope, $http) {
  var username = $scope.loginName;
  var password = $scope.loginPassword;
}

function SignupController($scope, $http) {
  var username = $scope.singupName;
  var password = $scope.singupPassword;
  var confirmPassword = $scope.signupConfirmPassword;

  $scope.submit = function() {

  };
}

function ChatController($scope, $http) {
  $scope.message = null;
}