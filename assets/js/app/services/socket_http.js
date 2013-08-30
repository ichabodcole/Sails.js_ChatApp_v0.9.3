define(['app'], function(app){
  'use strict';
	// Code adapted from Sailsjs assets/js/sails.io.js file for Angular usage.

	/**
	 * sails.io.js
	 *
	 * This file is completely optional, and merely here for your convenience.
	 *
	 * It reduces the amount of browser code necessary to send and receive messages
	 * to & from Sails by simulating a REST client interface on top of socket.io.
	 * It models its API after the pattern in jQuery you might be familiar with.
	 *
	 * So to switch from using AJAX to Socket.io, instead of:
	 *    `$.post( url, [data], [cb] )`
	 *
	 * You would use:
	 *    `socket.post( url, [data], [cb] )`
	 *
	 * For more information, visit:
	 * http://sailsjs.org/#documentation
	 */

	app.factory('socketHttp', function(socket){

		/**
		* Simulate HTTP over Socket.io
		* @api private :: but exposed for backwards compatibility w/ <= sails@~0.8
		*/

		function request (url, data, callback, method) {

			var usage = 'Usage:\n socket.' +
			  (method || 'request') +
			  '( destinationURL, dataToSend, fnToCallWhenComplete )';

			// Remove trailing slashes and spaces
			url = url.replace(/^(.+)\/*\s*$/, '$1');

			// If method is undefined, use 'get'
			method = method || 'get';


			if ( typeof url !== 'string' ) {
			  throw new Error('Invalid or missing URL!\n' + usage);
			}

			// Allow data arg to be optional
			if ( typeof data === 'function' ) {
			  callback = data;
			  data = {};
			}

						// Do we need to access io here???
						// Why not use native stringify or angular version
			// Build to request
			var json = window.io.JSON.stringify({
			  url: url,
			  data: data
			});

			socket.emit(method, json, function afterEmitted (result){
				var parsedResult = result;

				try {
						// Again should should not rely on socket.io's method here???
					parsedResult = window.io.JSON.parse(result);
				} catch (e) {
					if (typeof console !== 'undefined') {
						console.warn("Could not parse:", result, e);
					}
					throw new Error("Server response could not be parsed!\n" + result);
				}

				// TODO: Handle errors more effectively
				if (parsedResult === 404) throw new Error("404: Not found");
				if (parsedResult === 403) throw new Error("403: Forbidden");
				if (parsedResult === 500) throw new Error("500: Server error");

				// returns a boolean value and evaluates the
				// second parameter if the first is truthy.
				callback && callback(parsedResult);
			});
		};

		return {
			/**
			 * Simulate a GET request to sails
			 * e.g.
			 *    `socket.get('/user/3', Stats.populate)`
			 *
			 * @param {String} url    ::    destination URL
			 * @param {Object} params ::    parameters to send with the request [optional]
			 * @param {Function} cb   ::    callback function to call when finished [optional]
			 */

			get: function(url, data, cb){
				return this.request(url, data, cb, 'get');
			},

			/**
			 * Simulate a POST request to sails
			 * e.g.
			 *    `socket.post('/event', newMeeting, $spinner.hide)`
			 *
			 * @param {String} url    ::    destination URL
			 * @param {Object} params ::    parameters to send with the request [optional]
			 * @param {Function} cb   ::    callback function to call when finished [optional]
			 */

			post: function(url, data, cb){
				return this.request(url, data, cb, 'post');
			},

			/**
			 * Simulate a PUT request to sails
			 * e.g.
			 *    `socket.post('/event/3', changedFields, $spinner.hide)`
			 *
			 * @param {String} url    ::    destination URL
			 * @param {Object} params ::    parameters to send with the request [optional]
			 * @param {Function} cb   ::    callback function to call when finished [optional]
			 */

			put: function(url, data, cb){
				return this.request(url, data, cb, 'put');
			},

			 /**
			  * Simulate a DELETE request to sails
			  * e.g.
			  *    `socket.delete('/event', $spinner.hide)`
			  *
			  * @param {String} url    ::    destination URL
			  * @param {Object} params ::    parameters to send with the request [optional]
			  * @param {Function} cb   ::    callback function to call when finished [optional]
			  */

			delete: function(url, data, cb){
				return this.request(url, data, cb, 'delete');
			},

			// point to the request function
			request: request
		};
	});

	return app;
});