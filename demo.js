var https = require("https");
var http = require("http");
var url = require("url");

function getNodeJSSIte() {
  https.get('https://nodejs.org/en/', function (response) {

    console.log('Status Code: ', response.statusCode);
    console.log('headers: ', response.headers);

    var output ="";

    response.on('data', function(data) {
      console.log("Chunk lenght: ", data.length);
      // console.log(data + "\n");

      output += data;;
    });

    response.on('end', function () {
      console.log(output);
    });
  });


}

// getNodeJSSIte();
function runHttpServer () {

  var server = http.createServer(function (req, res) {
    res.writehead(200, {"Content-Type": 'text/plain'});sla
    var queryData = url.parse(req.url, t)
    console.log(req);
    req.end('okay');
  });
  server.listen(3000);
}

runHttpServer();
