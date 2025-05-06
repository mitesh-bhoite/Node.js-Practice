// Command Line Todo App
const fs = require("fs");
let todos = fs.existsSync("todos.json")
  ? JSON.parse(fs.readFileSync("todos.json"))
  : [];
function addTask(task) {}
