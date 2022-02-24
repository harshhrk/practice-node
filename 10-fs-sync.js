// fs -> file system

const { readFileSync, writeFileSync } = require("fs");
// OR
//  const fs = require("fs");
//  const first = fs.readFileSync(.....);

console.log('start')

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// if file not there node will create one and update the file, if the file is already there then the node will just update the file.
// Here in this case result-sync.txt file not in content folder so node will create file and add that string.
writeFileSync("./content/result-sync.txt", `Here is the result : ${first} ${second}`);

// this third parameter will append the text at end of ile, not update it.
writeFileSync("./content/result-sync.txt", `Here is the result : ${first} ${second}`, { flag: "a" });

console.log('done with this task')
console.log('starting the next one')