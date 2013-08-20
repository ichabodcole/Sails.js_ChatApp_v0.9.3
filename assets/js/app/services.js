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

chatApp.service('sendUserData', function($http, $window, errorHandler){
  this.send = function (path, data){
    $http.post(path, data)
    .success(function(res, status, headers, config){
      $window.location = '/chat';
    })
    .error(function(res, status, headers, config){
      errorHandler.setError("Error: " + res.error);
      errorHandler.showErrors();
    });
  };
});

chatApp.service('Messages', function($http){
  this.get = function(){
    return $http.get('/messages')
    .error(function(res, status, headers, config){
      errorHandler.setError("Error: " + res.error);
      errorHandler.showErrors();
    });
  };

  this.send = function(data){
    return $http.post('/messages', data)
    .error(function(res, status, headers, config){
      errorHandler.setError("Error: " + res.error);
      errorHandler.showErrors();
    });
  };
});