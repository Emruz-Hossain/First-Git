
var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Hello, dsfsd.");
	response.end();
}).listen(8080);
console.log('listening on port 8080...');