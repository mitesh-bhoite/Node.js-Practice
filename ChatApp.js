//Simple In-Memory Chat App
const express = require("express");
const app = express();
app.use(express.json());
const messages = [];

app.get("/chat", (req, res) => res.json(messages));
