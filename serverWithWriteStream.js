var http = require('http')
var fs = require('fs')
const { type } = require('os')
const { text } = require('stream/consumers')
var server = http.createServer(function(req,res){
    console.log('request made was'+ req.url)
    res.writeHead(200,{'Content-type': 'text/plain'})
    var myReadStream = fs.createReadStream(__dirname +'/file1.txt')
    myReadStream.pipe(res)
});
server.listen(3000,'127.0.0.1')
console.log('Listening to port 3000')