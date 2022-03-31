// next is just a function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   the next piece of middleware in line is going to run after calling next function
  next();
};

module.exports = logger;
