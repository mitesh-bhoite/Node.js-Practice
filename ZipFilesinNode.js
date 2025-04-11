//Zip Files in Node.js
const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("archive.zip");
const archive = archiver("zip");

archive.pipe(ouput);
archive.append(fs.createReadStream("file.txt"), { name: "file.txt" });
archive.finalize();
