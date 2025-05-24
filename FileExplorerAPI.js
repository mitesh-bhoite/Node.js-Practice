//File Explorer API
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/files", (req, res) => {
  fs.readdir(".", (err, files) => res.json(files));
});
app.listen(3000);
