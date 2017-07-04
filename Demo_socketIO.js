
var express = require('express');

var app = express();


var server = require('http').createServer(app);

var io = require('socket.io')(server);

server.listen(7777);

app.get('/', function(req,res){

  res.send("hello");
});

io.on('connection', function (socket) {

});
