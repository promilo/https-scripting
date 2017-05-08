var https = require('https');
var http = require('http');
var url = require('url');

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function pass (html) {

  /* Write your code here! */
  var better = '';
  for (var index = 0; index < html.length; index++){
    if (html[index] === 'a'){
      better += '4';
    }
    else if (html[index] === 'e'){
      better += '3';
    }else if (html[index] === 'o'){
      better += '0';
    }else if (html[index] === 'l'){
      better += '1';
    }else if (html[index] === 's'){
      better += '5';
    }else if (html[index] === 't'){
      better += '7';
    }else if (html[index] === 'k' && html[index-1]=== 'c'){
      better += 'x';
    }else if (html[index] === 'r' && html[index-1] === 'e'){
      better += '0r';
    }else if (html[index] === 'u' && html[index-1] === 'o' && html[index-2] === "y"){
      better += 'joo';
    }
    else{
      better += html[index];
    }
  }
  console.log(better);
}


getHTML(requestOptions, pass);
