var http = require('http');

function handleRequest(req, res) {
  console.log(req.method, req.url, req.headers);
  res.end('Welcome');
}

let server = http.createServer(handleRequest);
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
