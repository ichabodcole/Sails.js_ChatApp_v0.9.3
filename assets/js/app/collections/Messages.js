var chatApp = window.chatApp || {};

chatApp.MessageCollection = SailsCollection.extend({
  sailsCollection: 'messages',
  model: MessageModel,
});