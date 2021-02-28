var http = require('http');
var fs = require('fs');
var url = require('url');
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(201, { 'content-type': 'text/html' });
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(201, { 'content-type': 'text/html' });
    fs.createReadStream('./about.html').pipe(res);
  } else {
    res.end('welcome');
  }
}

let server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
