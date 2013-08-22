(function(){
  'use strict';

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
}());