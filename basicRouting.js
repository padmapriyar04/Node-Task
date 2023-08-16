var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url === '/home'){
        var myReadStream = fs.createReadStream(__dirname+'/file1.txt')
        res.writeHead(200,{'Content-type':'text/plain'})
        myReadStream.pipe(res)
    }else if(req.url === '/json'){
        var myReadStream = {
            name: 'Rani',
            age: 34
        }
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(myReadStream))
    }else if(req.url === '/html'){
        var myReadStream = fs.createReadStream(__dirname+'/index.html')
        res.writeHead(200,{'Content-type':'text/html'})
        myReadStream.pipe(res)
    }
})
server.listen(3000,'127.0.0.1')
