var http = require('http');
var fs = require('fs');
function handleRequest(req, res) {
  //   console.log(req.url, req.method);
  res.writeHead(201, { 'content-type': 'text/plain' });

  res.write(req.headers);
  res.end();
}

let server = http.createServer(handleRequest);
server.listen(7000, () => {
  console.log('Server is listening on port 7k');
});
