

var express = require ('express');


var app = express();

var server = require("http").createServer(app);

server.listen(3000);


app.get("/admin", function(req,res){
  //res.send("hello world");

  res.send("hello");
});


app.get("/tinhTong/:so1/:so2", function(req,res){
  //res.send("hello world");


  var so1 = req.params.so1;

  res.sendFile( __dirname + "/chuoi.txt");
});
