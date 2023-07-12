// sys -> i faster i javascript write a sys execute the next code if current is busy somewhere
// asys -> it is line by line excution cannot excute next line there for it is slow best option to write sys code in javascript

const { readFileSync, writeFileSync, write } = require("fs");
const path = require("path");
const pathfile = path.join("/content", "hello.txt");
console.log(pathfile);
const first = readFileSync("./content/subfolder/text.txt", "utf8");
console.log(first);
const second = readFileSync("./content/hello.txt", "utf8");
console.log(second);
writeFileSync(
  "./content/subfolder/text.txt",
  `here is the result :${first},${second}`,
  {
    flag: "a",
  }
);
