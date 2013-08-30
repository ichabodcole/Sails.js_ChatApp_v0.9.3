define(['app'], function(app){
  'use strict';

  app.factory('messagesResource', function($resource, errorHandler) {
    var factory = {};
    factory.resource = $resource('/messages/:messageId', {}, {
      getByUserId: {method:'GET', url:'/messages', isArray:true}
    });

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
    };

    factory.getByUserId = function (userId) {
      var userMessages = this.resource.getByUserId({userId:userId},
        function success (res) {
        // not implmented
        },
        function error (res) {
         errorHandler.setError("Error: " + res.error);
        }
      );
      return userMessages;
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

    factory.destroy = function (messageId) {
      var destroy = this.resource.delete({messageId:messageId},
        function success (res) {
          // not implemented
        },
        function error (res) {
          errorHandler.setError("Error: " + res.error);
        }
      );

      return destroy;
    };

    return factory;
  });
  return app;
});