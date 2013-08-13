var chatApp = window.chatApp || {};

$(function () {
  // instantiate the messages collection and
  // add it to the chatApp namespace.
  chatApp.messages = new chatApp.Messages();
  new chatApp.ChatView();
});