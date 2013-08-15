define(['backbone', 'views/MessagesView'], function(Backbone, MessagesView) {

  var ChatView = Backbone.View.extend({

    el: $('#chatContainer'),

    events: {
      'click #postMessageButton': 'postMessage'
    },

    initialize: function (options){
      // point an instance variable to the messages collection.
      this.messages = options.messages;
      // create the messages list sub view and
      // pass it the messages collection
      this.messageList = new MessagesView({collection:messages});
      // save a reference to the message form field
      this.messageField = this.$("#message");
      // call fetch on the messages collection
      this.messages.fetch();
    },

    postMessage: function (e){
      // get the value of the message field
      var messageText = this.messageField.val();
      // Only submit if the field is not blank.
      if (messageText){
      // the create method adds a new model to the collection
      // and saves it to the server.
        this.messages.create({ message: messageText }, { wait: true });
      }else{
        alert("Please enter some text!");
      }
      // set the value of the message field to an empty string.
      this.messageField.val("");
    }
  });

  return ChatView;
});