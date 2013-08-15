define(['backbone'], function(Backbone) {
  var Message = Backbone.Model.extend({
    urlRoot: '/messages'
  });

  return Message;
});