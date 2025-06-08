//Rate Limiter Middleware
const express = require("express");
const app = express();
const requests = {};
const limit = 5; // max requests per minute
app.use((req, res, next) => {
  const ip = req.ip;
  requests[ip] = requests[ip] || [];
  requests[ip] = requests[ip].filter((t) => Date.now() - t < 60000);
  if (requests[ip].length >= limit)
    return res.status(429).send("Too many requests!");
  requests[ip].push(Date.now());
  next();
});
