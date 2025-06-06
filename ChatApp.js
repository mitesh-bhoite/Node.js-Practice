//Simple In-Memory Chat App
const express = require("express");
const app = express();
app.use(express.json());
const messages = [];

app.get("/chat", (req, res) => res.json(messages));
app.post("/chat", (req, res) => {
  messages.push({ user: req.body.user, message: req.body.message });
  res.send("Message received!");
});
app.listen(3000, () => console.log("Chat app running..."));
