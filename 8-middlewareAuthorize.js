// this is just an example. We dont authorize user this way in express

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'nelson') {
    req.user = { name: 'nelson', id: 1 };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
