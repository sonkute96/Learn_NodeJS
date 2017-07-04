
var nodemailer = require('./module_nodemailer/getModuleNodeMailer.js');

var http = require('http');

http.createServer(function(req,res){

  var transporter = nodemailer.createTransport({


    service: 'gmail',

    auth: {
      user: 'minhsonfetel@gmail.com',
      pass: 'Sonkute123'
    }


  });

  var mailOptions = {
    from: 'minhsonfetel@gmail.com',
    to: 'minhsonqtt@gmail.com',
    subject: 'Son Pham dep trai',
    text: 'Ban hello?'
  };

  transporter.sendMail(mailOptions,function(error,info){

    if (error){
      console.log(error);
    }else{
      console.log('Email sent:' +info.response);
    }


  });


}).listen(8000);
