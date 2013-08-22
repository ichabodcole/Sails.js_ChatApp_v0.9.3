// Need a global reference to chatApp
var chatApp;
(function(){
  'use strict';

  chatApp = chatApp || angular.module('chatApp', ['ngResource']);
}());
