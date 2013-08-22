var chatApp = chatApp || angular.module('chatApp', []);

chatApp.factory('errorHandler', function(){
  var factory = {};

  factory.setError = function(errorMessage) {
    this.errors = this.errors || [];
    this.errors.push(errorMessage);
  };

  factory.showErrors = function() {
    if(this.errors) {
      var errorMsg = '';
      angular.forEach(this.errors, function(error, index){
        errorMsg += error + '\n';
      });
      alert(errorMsg);
      this.errors = null;
    }
  };

  return factory;
});

chatApp.service('userResource', function($http, $window, errorHandler) {
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

chatApp.factory('messagesResource', function($resource, errorHandler) {
  var factory = {};
  factory.resource = $resource('/messages');

  factory.query = function(){
    var query = this.resource.query(
      function success(res) {
        // not implemented
      },
      function error(res) {
        errorHandler.setError("Error: " + res.error);
      }
    );

    return query;
  };

  factory.save = function(data) {
    var save = this.resource.save(data,
      function success(res) {
        // not implemented
      },
      function error(res) {
        errorHandler.setError("Error: " + res.error);
      }
    );

    return save;
  };

  return factory;
});

// Validation services
chatApp.service('loginValidator', function(errorHandler) {
  this.isValid = function (username, password) {
    if (username && password) {
        return true;
    } else {
      errorHandler.setError("A username and password is required");
    }
    return false;
  };
});

chatApp.service('signupValidator', function(errorHandler){
  this.isValid = function (username, password, confirmPassword) {
    if (username && password) {
      if (password === confirmPassword) {
        return true;
      } else {
        errorHandler.setError("Passwords don't match");
      }
    } else {
      errorHandler.setError("A username and password is required");
    }
    return false;
  };
});

chatApp.service('messageValidator', function(errorHandler) {
  this.isValid = function (message) {
    if (message){
      return true;
    } else {
      errorHandler.setError("A username and password is required");
    }
  };
});
