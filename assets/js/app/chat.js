require(['underscore',
         'collections/Messages',
         'views/ChatView'], function(_, Messages, ChatView) {

  // instantiate the messages collection.
  messages = new Messages();
  new ChatView({messages: messages});
});