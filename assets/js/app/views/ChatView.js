var chatApp = window.chatApp || {};

chatApp.ChatView = Backbone.View.extend({

  el: $('#chatContainer'),

  events: {
    'click #postMessageButton': postMessage
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
    messages.create({ message: messageText }, { wait: true });
    // set the value of the message field to an empty string.
    this.messageField.val("");
  }
});