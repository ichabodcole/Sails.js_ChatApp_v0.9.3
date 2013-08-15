define(['backbone'], function(Backbone) {
  // Setup underscore's templating to use mustache style templates,
  // this avoids conflicts with ejs templates.
  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };

  var MessageView = Backbone.View.extend({
    tagName: 'div',
    className: 'message',
    template: _.template($('#messageTemplate').html()),

    initialize: function(options) {
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

  return MessageView;
});
