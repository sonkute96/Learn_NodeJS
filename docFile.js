
var fs = require("fs");


var chuoi  = fs.readFileSync( __dirname + "/chuoi.txt");

console.log(chuoi.toJSON());
