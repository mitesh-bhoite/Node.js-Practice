const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const users = []; // Simulating database
const SECRET_KEY = "supersecret";

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  users.push({ username: req.body.username, password: hashedPassword });
  res.json({ message: "User Registered!" });
});

app.post("/login", async (req, res) => {
  const user = users.find((u) => u.username === req.body.username);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});
