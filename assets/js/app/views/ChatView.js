var chatApp = window.chatApp || {};

chatApp.ChatView = Backbone.View.extend({

  el: $('#chatContainer'),

  events: {
    'click #postMessageButton': 'postMessage'
  },

  initialize: function (){
    // create the messages list sub view and
    // pass it the messages collection
    this.messageList = new chatApp.MessagesView({collection:chatApp.messages});
    // save a reference to the message form field
    this.messageField = this.$("#message");
    // call fetch on the messages collection
    chatApp.messages.fetch();
  },

  postMessage: function (e){
    // get the value of the message field
    var messageText = this.messageField.val();
    // Make sure the message value isn't empty.
    if (messageText) {
      // the create method adds a new model to the collection
      // and saves it to the server.
      chatApp.messages.create({ message: messageText }, { wait: true });
    } else {
      alert("Please enter some text.");
    }
    // set the value of the message field to an empty string.
    this.messageField.val("");
  }
});