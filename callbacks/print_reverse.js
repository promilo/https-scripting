var https = require('https');
var http = require('http');
var url = require('url');

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse (html) {

  /* Write your code here! */
  var newString = "";
    for (var i = html.length - 1; i >= 0; i--) {
        newString += html[i];
    }
    console.log(newString);;

}

getHTML(requestOptions, reverse);
