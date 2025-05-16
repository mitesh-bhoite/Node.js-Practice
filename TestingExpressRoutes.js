//Testing Express Routes with Supertest
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello Test"));
