const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js API!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello, API!" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
