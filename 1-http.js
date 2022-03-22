const http = require('http');

const server = http.createServer((req, res) => {
  console.log('User hit the server');
  res.end('Welcome to our server');
});

server.listen(3000, () => {
  console.log('Server stared on port 3000');
});
