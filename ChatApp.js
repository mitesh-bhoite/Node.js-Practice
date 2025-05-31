//Simple In-Memory
const express = require("express");
const app = express();
app.use(express.json());
const messages = [];
