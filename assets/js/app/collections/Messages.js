var chatApp = window.chatApp || {};

chatApp.Messages = chatApp.SailsCollection.extend({
  sailsCollection: 'messages',
  model: chatApp.Message,
});