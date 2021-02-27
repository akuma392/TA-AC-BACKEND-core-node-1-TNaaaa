var http = require('http');

function handleRequest(req, res) {
  //   res.statusCode = 200;
  console.log(req.method);
  res.writeHead(201, { 'content-type': 'text/html' });
  res.end('<h1>Welcome</h1>');
}

let server = http.createServer(handleRequest);
server.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
