

var express = require('./module_express/getModuleExpress.js');



var app = express();
// express ho tro create Server

var server = require('http').createServer(app);

server.listen(8000);


app.use(express.static('public'));
// get routine

app.get ('/gmail', function(req,res){


// tra ve text on the homepage

  // tra ve user

  res.end("Hello world");
});

// ----- this responds a POST request for the homepage

app.get('tinhtong/:soA', function(req,res){

  var soA = req.params.soA;
  res.send(soA);
});
