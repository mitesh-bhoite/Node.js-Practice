//Local JSON Database
const fs = require("fs");

const users = [
  { id: 1, name: "Mitesh", age: 21 },
  { id: 2, name: "John", age: 25 },
];
fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
console.log(data);
