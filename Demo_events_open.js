
//
// var fs = require('fs');
//
//
// var readStream = fs.createReadStream('./chuoi.html');
//
// readStream.on('open',function(){
//
//   console.log("The file is open");
// });
//
//

// ------------ event

var events = require('events');


var eventEmitter = new events.EventEmitter();

// create an event handler

var myEventHandler = function(){

  console.log("I hear a scream");
}

// chi dinh event handler do la 1 event
eventEmitter.on('scream',myEventHandler);


eventEmitter.emit('scream');
