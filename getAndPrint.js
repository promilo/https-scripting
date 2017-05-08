var https = require('https');
var http = require('http');
var url = require('url');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(response) {
    var output = "";
    response.setEncoding('utf8');

    response.on('data', function(data) {
        output += data;
    });

    response.on('end', function() {
      // Simply log the result to the screen
    console.log(output);

    });
  });
}

getAndPrintHTML();
