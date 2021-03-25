
var http = require("http");

var fs = require("fs");

var myreadStream = fs.createReadStream(__dirname + "/lorem.txt", "utf8");

var mywriteStream = fs.createWriteStream(__dirname + "/loremwrite2.txt");

myreadStream.pipe(mywriteStream);