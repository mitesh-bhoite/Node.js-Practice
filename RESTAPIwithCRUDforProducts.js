// REST API with CRUD for Products

const express = require("express");

const app = express();
app.use(express.json());

let products = [];
app.get("/products", (req, res) => res.json(products));
app.post("/products", (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.status(201).json(product);
});
