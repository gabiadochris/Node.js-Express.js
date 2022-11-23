const { readFile } = require("fs");

console.log("start a first task");
//CHECK FILE PATH!!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// setTimeout//
//started operating system process

console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
//completed and exited operating system process

//setInterval//
setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("i will run first");
//process stays alive unless
//kill process CONTROL + C
//unexpected error

//http//
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("server Listening on port : 5000....");
});
