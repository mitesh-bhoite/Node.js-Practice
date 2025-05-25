//REST API with MongoDB (CRUD for Tasks)
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/taskdb");
const Task = mongoose.model("Task", { title: String, done: Boolean });
