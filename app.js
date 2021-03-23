//console.log("hey ninjas");

//var time = 0;

//setTimeout(function(){
//    console.log("3 seconds have passed");
//}, 3000);


//setInterval(function(){
//    time += 2;
//    console.log(time + " seconds passed");
//}, 2000);

//var timer = setInterval(function(){
//    time++;
//    console.log(time + " seconds have passed");
//    if(time == 5){
//        clearInterval(timer);
//    }
//}, 1000);

//console.log(__dirname);
//console.log(__filename);

//Normal Function Statement

//function sayHi(){
//    console.log("Hi");
//}
//
//sayHi();

//function callFunction(fun){
//    console.log("Hello " + fun());
//}
//
//var saybye = function(){
//    return "bye";
//};
//
////saybye();
//
//callFunction(saybye);

//var stuff = require("count.js");
//
//console.log(stuff.counter(["shaun", "crystal", "ryu", "ray"]));
//
//console.log(stuff.adder(5,8));
//
//console.log(stuff.pi);
//
//console.log(stuff.adder(3, stuff.pi));

//var events = require("events");

//var util = require("util");

//var Person = function(name){
//    this.name = name;
//};

//util.inherits(Person, events.EventEmitter);

//var james = new Person("James");
//var mary = new Person("Mary");
//var roger = new Person("Roger");

//var people = [james, mary, roger];

//people.forEach(function(person){
//    person.on("speak", function(msg){
//        console.log(person.name + " said: " + msg);
//    });
//});

//james.emit("speak", "hey dudes");

//roger.emit("speak", "I want curry");

//element.on("click", function(){});

//var myEmitter = new events.EventEmitter();
//
//myEmitter.on("someEvent", function(msg){
//    console.log(msg);
//});
//
//myEmitter.emit("someEvent", "the event was emitted");

var fs = require("fs");

//var readMe = fs.readFileSync("readme.txt", "utf8"); Synchronous method

//console.log(readMe);

//fs.writeFileSync("writeme.txt", readMe);

//fs.readFile("readme.txt", "utf8", function(err, data){
//    console.log(data);
//});

fs.readFile("readme.txt", "utf8", function(err, data){
     fs.writeFile("writeme.txt", data, (err) => {});
});


//code