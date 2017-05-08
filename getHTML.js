var https = require('https');
var http = require('http');
var url = require('url');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      callback(data);
    });

    response.on('end', function() {
      // Simply log the result to the screen

    });
  });

}



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);
