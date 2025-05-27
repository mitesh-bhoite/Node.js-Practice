//REST API with MongoDB (CRUD for Tasks)
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/taskdb");

const Task = mongoose.model("Task", { title: String, done: Boolean });
app.get("/tasks", async (req, res) => res.json(await Task.find()));
app.post("/tasks", async (req, res) => res.json(await Task.create(req.body)));
app.put("/tasks/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated!");
});
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Deleted!");
});

app.listen(3000);
