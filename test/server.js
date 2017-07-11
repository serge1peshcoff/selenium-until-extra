const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  switch (req.url) {
    case '/first':
      fs.createReadStream(path.join(__dirname, 'assets/first.html')).pipe(res);
      break;
    case '/second':
      fs.createReadStream(path.join(__dirname, 'assets/second.html')).pipe(res);
      break;
    case '/third':
      fs.createReadStream(path.join(__dirname, 'assets/third.html')).pipe(res);
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
      break;
  }
});

module.exports.server = server;
module.exports.start = () => new Promise((res) => {
  server.listen(port, hostname, () => res());
});

module.exports.stop = () => new Promise((res) => {
  server.close();
  res();
});
