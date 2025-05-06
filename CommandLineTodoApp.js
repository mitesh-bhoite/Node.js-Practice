// Command Line Todo App
const fs = require("fs");
let todos = fs.existsSync("todos.json")
  ? JSON.parse(fs.readFileSync("todos.json"))
  : [];
function addTask(task) {
  todos.push(task);
  fs.writeFileSync("todos.json", JSON.stringify(todos));
  console.log("Task added!");
}
function listTasks() {
  todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}
const cmd = process.argv[2];
