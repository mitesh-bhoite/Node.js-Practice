//Local JSON Database
const fs = require("fs");

const users = [];
fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
console.log(data);
