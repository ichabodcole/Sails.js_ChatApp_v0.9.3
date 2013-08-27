(function(){
  'use strict';

  chatApp.factory('messagesResource', function($resource, errorHandler) {
    var factory = {};
    factory.resource = $resource('/messages/:messageId');

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

    factory.get = function(messageId) {
      var get = this.resource.get(
        { messageId:messageId },
        function success(res){
          // not implemented
        },
        function error (res) {
          errorHandler.setError("Error: " + res.error);
        }
      );

      return get;
    }

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