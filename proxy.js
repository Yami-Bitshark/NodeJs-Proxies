//Simple Http Proxy Using http module
var http = require ('http');
var server = http.createServer(function (request, response){
  var path = request.url;
  console.log(path);
  var options = {
    hostname: request.headers.host,
    port: 80,
    path: request.url,
    method: 'GET'
  };
  var body = '';
  var proxy = http.request(options, function(res){
    res.on('data', function(data){
      body += data;
    });
    res.on('end', function(){
      response.writeHead(res.statusCode, res.headers);
      response.write(body);
    });
  });
  proxy.end();
});
server.listen(8082);
