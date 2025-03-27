const express = require("express");
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Mitesh" }];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});
