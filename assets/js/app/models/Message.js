var chatApp = window.chatApp || {};

chatApp.Message = Backbone.Model.extend({
    urlRoot: '/messages',
});