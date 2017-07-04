// goi module http

var http = require('http');

// goi module url
var url = require('url');

// goi module fs

var fs = require('fs');


// khoi tao server


http.createServer(function(req,res){


  var q = url.parse(req.url, true);


  var fileName = "." +q.pathname;

  fs.readFile(fileName, function(err,data){

    if (err){
      res.writeHead(404, {"Content_Type":"text/html"});

      return res.end("404 Not Found");
    }

    res.writeHead(200,{"Content_Type":"text/html"});

    res.write(data);

    return res.end();
  });


}).listen(8000);
