const fs = require('fs'),
	http = require('http');
const { dirname } = require('path');
console.log(__dirname);
const server = http.createServer(function(req, res) {
	fs.readFile(__dirname + req.url, function(err,data) {
		if (err) {
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
});
const port = '8080';
server.listen(port);
console.log('listening on port ' + port)