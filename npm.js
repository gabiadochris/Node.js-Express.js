// npm  - global command, come with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it inn any project
// npm install -g <PackageName>
//sudo npm install -g <PackageName> {mac}

//package.json - manifest file (stores important info about project/package)
// manual approarch (create package.json in the root, create properties etc)
//npm init (step, press enter to skip)
//npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people");
