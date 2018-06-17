var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:name', function (req, res) {
  var name = req.params.name;  
  res.send('Hello ' +  name + '!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
