var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application/json'})
    var obj = {
        name: 'priya',
        age: 18,
        job: 'student',
    }
    res.end(JSON.stringify(obj))
})
server.listen(3000,'127.0.0.1')
console.log("JSON served")