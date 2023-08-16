var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('greet',function(name){
    console.log('Hello',name,"Welcome!");
});

myEmitter.emit('greet','pp');