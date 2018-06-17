var express = require('express')
var app = express()




app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/hello/:name', function (req, res) {
  var name = req.params.name
  res.send('Hello ' +  name + '!')
})

app.get('/json', function (req, res) {
  var json = {"foo": "bar"}
  res.json(json)
})

class Greeting {
  constructor(name) {
    this.name = name
  }
}

app.get('/json/:name', function (req, res) {
  greeting = new Greeting(req.params.name)
  greeting.something = req.params.name
  res.json(greeting)
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
