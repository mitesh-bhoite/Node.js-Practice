//for file handling
const fs = require("fs");

// Writing to file
fs.writeFileSync("message.txt", "Hello, this is a test file.");

// Reading from a file
const data = fs.readFileSync("message.txt", "utf8");
console.log(data);
