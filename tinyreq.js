//simple http proxy using tinyreq and expressjs module
var tiny = require('tinyreq');
var express = require('express');
var app = express();

app.all('*/*', function(request, response){
  tiny(request.url.toString(), function(error, body){
    response.send(body);
  });
}).listen(8089);

