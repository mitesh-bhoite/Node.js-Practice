//File Explorer API
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/files", (req, res) => {
  fs.readdir(".", (err, files) => res.json(files));
});
app.get("/files/:filename", (req, res) => {
  const filePath = path.join(__dirname, req.params.filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).send("File not found");
  });
});
app.listen(3000);
