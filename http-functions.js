var https = require('https');
var http = require('http');
var url = require('url');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function(response) {
        response.setEncoding('utf8');

        response.on('data', function(data) {
          callback(data);
        });

        response.on('end', function() {
          // Simply log the result to the screen

        });
      });
};

// function getHTML (options, callback) {
//
//   /* Add your code here */
//   https.get(options, function(response) {
//     response.setEncoding('utf8');
//
//     response.on('data', function(data) {
//       callback(data);
//     });
//
//     response.on('end', function() {
//       // Simply log the result to the screen
//
//     });
//   });
//
// }
