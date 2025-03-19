const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  //console.log(err, data);
});
//2nd
//note : sync is basic ly use for lock that function and execute that one first than next
const a = fs.readFileSync("file.txt");
console.log(a.toString());
//same for write
fs.writeFile("file.txt", "Front-end developer", () => {
  console.log("Written to the file");
});
//fie system model
