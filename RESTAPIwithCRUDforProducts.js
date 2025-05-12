// REST API with CRUD for Products
const express = require("express");
const app = express();
app.use(express.json());
let products = [];
