const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// setup static and middleware
// static assets are file that server doesnt have to change. Example of a static file is image, styles file and also a JS file
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', () => {
  res.status(404).send(`resource not found`);
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
