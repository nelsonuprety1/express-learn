const express = require('express');
const app = express();
const PORT = 3000;
const { products } = require('./data');

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
