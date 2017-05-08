// while https is built-in to Node, it is a module, so it must be required
var https = require('https');
var http = require('http');
var url = require('url');



function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
        console.log(data + "/n");
    });
  });
}

getAndPrintHTMLChunks();
