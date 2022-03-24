const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;
  // homepage
  if (url === '/') {
    /**
     * The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module
     *  which sends a response header to the request. The status code is a 3-digit HTTP status code,
     * like 404. The last argument, headers, are the response headers.
     * Optionally one can give a human-readable statusMessage as the second argument.
     */
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About page</h1>');
    res.end();
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }

  // logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  }
  // resource not found
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Content Not Found</h1>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server stared on port 3000');
});
