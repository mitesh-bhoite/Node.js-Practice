const express = require("express");
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Mitesh" }];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST new user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.json(user);
});
