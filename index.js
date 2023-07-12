// node is aschronous
const fs = require("fs");
const path = require("path");
fs.readFile(
  path.join(__dirname, "files", "Starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
console.log("hello");
process.on("uncaughtException", (err) => {
  console.error(`there was an uncaught error:${err}`);
  process.exit(1);
});
