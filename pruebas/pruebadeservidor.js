var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Kiubo Yisus ya ponte a estudiar y por cierto el burro se la come');
}).listen(3001, "207.154.246.93");
console.log('Server running at http://207.154.246.93:3001/');