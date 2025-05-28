//Log Visitor IPs
const express = require("express");
const fs = require("fs");
const app = express();
app.use((req, res, next) => {
  const ip = req.ip;
});
