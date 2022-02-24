// npm - global command, comes with node
// npm --version

// local dependency - use it only int this particular project
// npm install <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores inportant info about project/package)
// three ways to create this file package.json -
// 1. manual apporoach (create package.json int the root, create properties, etc.)
// 2. npm init (step by step process)
// 3. npm init -y (everything default)

const loadash = require("lodash");

const item = [1, [2, [3, [4]]]];
const newItem = loadash.flattenDeep(item);

console.log(newItem);

// make .gitignore file
// on cmd type == "git init"