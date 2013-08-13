var chatApp = window.chatApp || {};

_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

chatApp.MessageView = Backbone.View.extend({
  tagName: 'div',
  className: 'message',
  template: _.template($('messageTemplate').html()),

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});