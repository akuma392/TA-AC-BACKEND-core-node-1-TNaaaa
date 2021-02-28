var http = require('http');
var fs = require('fs');
var url = require('url');
function handleRequest(req, res) {
  console.log(req.method);
  let parsedUrl = url.parse(req.url);
  console.log(parsedUrl.pathname, req.url);
  res.writeHead(201, { 'content-type': 'text/html' });
  res.end(JSON.stringify(parsedUrl.query));
}
let server = http.createServer(handleRequest);
server.listen(2000, () => {
  console.log('Server is listening on port 2k');
});
