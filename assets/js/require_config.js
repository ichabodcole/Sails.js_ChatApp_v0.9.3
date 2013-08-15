// This is a utility function for returning the full path
// to a bower component. It assumes the component folder
// and file name are the same.
function bowerPath(componentName) {
  var basePath = '../../bower_components/';
  var componentPath = componentName + '/' + componentName;
  return basePath + componentPath;
}

requirejs.config({
  baseUrl:'js/app',

  paths: {
    js: '../',
    underscore: bowerPath('underscore'),
    jquery: bowerPath('jquery'),
    backbone: bowerPath('backbone')
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
    }
  }
});