// const fs = require('fs')
// fs.read

const { readFileSync, writeFileSync } = require("fs");
console.log("start ");
// path to the specific file
// Encoding

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// node will create a file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("Starting the next one");
