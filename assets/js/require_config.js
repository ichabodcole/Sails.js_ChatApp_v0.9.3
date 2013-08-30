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
    angular: bowerPath + 'angular-all-unstable/angular',
    'angular-resource': bowerPath + 'angular-all-unstable/angular-resource',
    'io': bowerPath + 'socket.io-client/dist/socket.io.js'
  },

  shim: {
    'angular': {
      exports: 'angular',
    },
    'angular-resource': {
      deps: ['angular']
    }
    // 'socket.io-client': {
    //   exports: 'io'
    // }
  }
});