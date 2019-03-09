const express = require('express');
const decorators = require('./decorators');

const port = 4000;
const app = express();
const hostName = '127.0.01';

app.get('/decorators', decorators);

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the decorators examples'});
});

app.listen(port, () => {
  console.log(`Server listening on https://${hostName}:${port}`);
});
