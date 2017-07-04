

var express = require('./module_express/getModuleExpress.js');

var app = express();

var server = require('http').Server(app);

server.listen(8000);

var nodemailer = require('./module_nodemailer/getModuleNodeMailer.js');

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
  subject: 'Hello Son',
  text: 'Ban co khoe khong?'
};


transporter.sendMail(mailOptions,function(error,info){

  if (error){
    console.log(error);
  }else{
    console.log("Mail sent:"+info.response);
  }
});
