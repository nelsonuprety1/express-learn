const express = require('express');
const app = express();
const PORT = 3000;
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>HOME PAGE</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

// using route params
app.get('/api/products/:productID', (req, res) => {
  //   console.log(req);
  //   console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    product => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  return res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];

  if (search) {
    sortedProduct = sortedProduct.filter(product => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
    // res.status(200).send('No products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProduct);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
