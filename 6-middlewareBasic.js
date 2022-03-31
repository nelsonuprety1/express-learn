// Express Middleware are functions that execute during request to the server.
// Each middleware function has access to request and response object.
// Middleware is how express handles sequence of functions
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
'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const logger = require('./7-middlewareLogger');
const authorize = require('./8-middlewareAuthorize');

// req => middleware => res

// next is just a function
// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   the next piece of middleware in line is going to run after calling next function
//   next();
// };

// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
//  It is mostly used to set up middleware for your application.
// Order matters while using app.use
// app.use(logger);

// it will apply to all the routes with /api
// app.use('/api',logger);

// To execute multiple middleware functions in app.use we  place them in array
app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('HOME');
});

app.get('/about', (req, res) => {
  res.send('ABOUT');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('ITEMS');
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
