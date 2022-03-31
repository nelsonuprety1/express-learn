// Express Middleware are functions that execute during request to the server.
// Each middleware function has access to request and response object.
/**
 * Middleware functions are functions that have access to the request object (req),
 *  the response object (res), and the next function in the application’s request-response cycle.
 *  The next function is a function in the Express router which, when invoked,
 *  executes the middleware succeeding the current middleware.
 
 * Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.
 */

const express = require('express');
const app = express();
const PORT = 3000;

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get('/', logger, (req, res) => {
  res.send('HOME');
});

app.get('/about', logger, (req, res) => {
  res.send('ABOUT');
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
