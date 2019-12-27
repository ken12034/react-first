var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) res.send(404);
  });
});

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
  res.sendFile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
    if (err) res.send(404);
  });
});

server.listen(3030,'localhost',function(){
  console.log(' http://localhost:3030/');
});