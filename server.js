let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime');

const send404 = (response) => {
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.write('Error 404. Page not found!');
	response.end();
}

const sendPage = (response, filePath, fileContent) => {
	response.writeHead(200, {"Content-Type" : mime.lookup(path.basename(filePath))});
	response.end(fileContent);
}

const serverWorking = (response, absPath) => {
	
	fs.exists(absPath, (exists) => {
		if (exists) {
			fs.readFile(absPath, (error, data) => {
				if (error) {
					send404(response);
				}

				sendPage(response, absPath, data);
			});
		} else {
			send404(response);
		}

	});
}

http.createServer()
	.on('request', (request, response) => {
		let filePath = false;

		if (request.url === '/') {
			filePath = 'public/index.html';
		} else {
			filePath = 'public' + request.url;
		}

		let absPath = './' + filePath;

		serverWorking(response, absPath);
	})
	.listen(process.env.PORT || 6969);