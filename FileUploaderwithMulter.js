//File Uploader with Multer
const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});

app.listen(3000, () => console.log("Uploader running at port 3000"));
