var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write('Hello world. I\'m NgocNH');
	response.end();
}).listen(6969);