//Log Visitor IPs
const express = require("express");
const fs = require("fs");
const app = express();
app.use((req, res, next) => {
  const ip = req.ip;
  fs.appendFileSync("visitors.log", `${new Date()} - ${ip}\n`);
  next();
});

app.get("/", (req, res) => res.send("Logged your IP!"));
