var http = require('http');

var url = require('url');
function handleRequest(req, res) {
  let parsedURL = url.parse(req.url);
  let pathName = parsedURL.pathname;
  if (req.method === 'GET' && pathName === '/') {
    res.writeHead(201, { 'content-type': 'text/plain' });
    res.end('Welcome to home page');
  } else if (req.method === 'GET' && pathName === '/about') {
    res.writeHead(201, { 'content-type': 'text/html' });
    res.end(`<h2>this is all about NodeJS</h2>`);
  } else if (req.method === 'POST' && pathName === '/about') {
    res.writeHead(201, { 'content-type': 'application/json' });
    res.end(`{ message: this is a post request }`);
  } else {
    res.statusCode = 403;
    res.end('Page not found');
  }
}

let server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
