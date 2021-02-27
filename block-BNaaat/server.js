var http = require('http');
var fs = require('fs');
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.writeHead(201, { 'content-type': 'text/html' });
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      } else {
        res.end(content);
      }
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.writeHead(201, { 'content-type': 'text/html' });
    fs.createReadStream(`./node.html`).pipe(res);
  } else {
    res.statusCode = 403;
    res.end('Page not found');
  }
}

let server = http.createServer(handleRequest);
server.listen(5555, () => {
  console.log('Server is listening on port 5555');
});
