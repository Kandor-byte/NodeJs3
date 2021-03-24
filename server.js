
var http = require("http");

var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/lorem.txt", "utf8"); //without utf8 you only get the chunk sizes not the actual text

myReadStream.on("data", function(chunk){
    console.log("new chunk received:");
    console.log(chunk);
});













/*

var server = http.createServer(function(req, res){
    console.log("request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
});

server.listen(3000, "127.0.0.1");

console.log("now listening to port 3000");

*/