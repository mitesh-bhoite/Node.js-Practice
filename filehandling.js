//for file handling
const fs = require("fs");

// Writing to a file
fs.writeFileSync("message.txt", "Hello, this is a test file.");

// Reading from  file
const data = fs.readFileSync("message.txt", "utf8");
console.log(data);
