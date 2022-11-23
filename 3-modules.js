// GLOBALS - NO WINDOW !!!!

// _dirname - path tp current directory
// _filename - file name
// require - function to use modules (Commonjs)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname);

const Names = require("./2-global");
console.log(Names);

const sayHi = require("./3-SayHi");
console.log(sayHi);

sayHi("Susan");
sayHi("Andrew");
sayHi("Mathew");
