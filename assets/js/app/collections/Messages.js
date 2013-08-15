define(['collections/SailsCollection',
        'models/Message'], function(SailsCollection, Message) {

  var Messages = SailsCollection.extend({
    sailsCollection: 'messages',
    model: Message,
  });

  return Messages;
});