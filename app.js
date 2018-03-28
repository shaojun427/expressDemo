var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendfile(__dirname+ '/index.html');
});

var server = app.listen(3000, function () {

});