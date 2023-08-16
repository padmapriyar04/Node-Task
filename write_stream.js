var fs = require('fs');
var http = require('http');
var myReadStream = fs.createReadStream(__dirname + '/file1.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/file2.txt');
myReadStream.on('data',function(chunk){
    console.log("data being written to file2.txt");
    myWriteStream.write(chunk);
});

