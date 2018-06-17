var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:name', function (req, res) {
  var name = req.params.name;  
  res.send('Hello ' +  name + '!');
});

app.get('/json', function (req, res) {
  var json = {"foo": "bar"};
  res.json(json);
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
