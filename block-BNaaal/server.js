var http = require('http');

function handleRequest(req, res) {
  res.end('Welcome');
}

let server = http.createServer(handleRequest);
server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
