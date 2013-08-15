// path to bower directory.
var bowerPath = '../../bower_components/';

// This is a utility function for returning the full path
// to a bower component. It assumes the component folder
// and file name are the same.
function bowerComponentPath(componentName) {
  var componentPath = componentName + '/' + componentName;
  return bowerPath + componentPath;
}

requirejs.config({
  baseUrl:'js/app',

  paths: {
    js: '../',
    underscore: bowerComponentPath('underscore'),
    jquery: bowerComponentPath('jquery'),
    backbone: bowerComponentPath('backbone'),
    'socket.io-client': bowerPath + 'socket.io-client/dist/socket.io',
    'sails.io-amd': '../sails.io-amd'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'underscore': {
      exports: '_'
    },

    'jquery': {
      exports: '$'
    },

    'socket.io-client': {
      exports: 'io'
    }
  }
});