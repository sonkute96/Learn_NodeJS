// goi module http

var http = require('http');

// goi module formidable

var formidable = require('./module_formidable/getModuleFormidable.js');

// goi module fs

var fs = require('fs');


// tao server

http.createServer(function(req,res){

  if (req.url == '/fileUpload'){
    var form = new formidable.IncomingForm(); // di vao cai form do

    form.parse(req, function(err, fields, files){

        var oldPath = files.fileUpload.path;

        var newPath = '/Users/phamson/Desktop/' + files.fileUpload.name;

        fs.rename(oldPath,newPath, function(err){

              if (err){
                  console.log(err);
              }

              res.write('File uploaded and moved !');

              res.end();
      });


    });


  }
  else{

    res.writeHead(200, {"Content-Type":"text/html"});

    var data = fs.readFileSync( __dirname + "/UploadForm.html");

    res.end(data);

  }
}).listen(8000);
