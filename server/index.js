var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use('/static', express.static(`${__dirname}/public`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(8000, () => {
  console.log('Server running on 8000');
});