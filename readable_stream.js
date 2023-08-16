var fs = require('fs');
var http = require('http');

var myReadStream = fs.createReadStream(__dirname + '/file1.txt','utf-8');
myReadStream.on('data', function(chunk){
    console.log('New chunk recieved')
    console.log(chunk)
});
