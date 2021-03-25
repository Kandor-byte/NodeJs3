
var http = require("http");

var fs = require("fs");

//var myreadStream = fs.createReadStream(__dirname + "/lorem.txt", "utf8"); //without utf8 you only get the chunk sizes not the actual text

//var mywriteStream = fs.createWriteStream(__dirname + "/loremwrite.txt");

//myreadStream.on("data", function(chunk){
//    console.log("new chunk received:");
//    console.log(chunk); 
//}); This is how you read data from a file and display it in the console

//myreadStream.on("data", function(chunk){
//    console.log("new chunk received:");
//    mywriteStream.write(chunk);
//});

//myreadStream.pipe(mywriteStream);



var server = http.createServer(function(req, res){
    console.log("request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    var myreadStream = fs.createReadStream(__dirname + "/index2.html", "utf8");
    //var mywriteStream = fs.createWriteStream(__dirname + "/loremwrite.txt");
    myreadStream.pipe(res);
    //res.end("Hello World!");
});

server.listen(3000, "127.0.0.1");

console.log("now listening to port 3000");

