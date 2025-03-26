//it is a basic server for express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});
