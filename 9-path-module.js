// Path Module

const path = require("path");

console.log(path.sep);

// path.join
const filepath = path.join("./content", "subfolder", "text.txt");

console.log(filepath);

// basename
const base = path.basename(filepath);
console.log(base);

// Path.resolve
const absolute = path.resolve(__dirname, "constent", "subfolder", "text.txt");
console.log(absolute);
