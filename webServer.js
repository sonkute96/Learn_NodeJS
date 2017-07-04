

var http = require("http");

var fs = require("fs");

http.createServer(function(req,res){

  //   res.writeHead(200, {"Content-Type": "text/html"});
  //
  // var data = fs.readFileSync( __dirname + "/chuoi.txt","utf-8");
  //
  // res.end(data);
  //


//---- tra thang file chuoi.txt (html)

//  fs.createReadStream( __dirname + "/chuoi.txt","utf-8").pipe(res); // do vao res



  // tra lai la kieu json

  res.writeHead(200, {"Content-Type":"application/json"});

  var obj = {
    ho: "Pham",
    ten: "Minh Son",
    namsinh : 1996
  };

  res.end(JSON.stringify(obj));

}).listen(7777); // mo port 7777
