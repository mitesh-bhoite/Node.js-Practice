//it is a basic server for express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
