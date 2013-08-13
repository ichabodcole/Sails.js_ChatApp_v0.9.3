var chatApp = window.chatApp || {};

chatApp.MessageModel = Backbone.Model.extend({
    urlRoot: '/messages',
});