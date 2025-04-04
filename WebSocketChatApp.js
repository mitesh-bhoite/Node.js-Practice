const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (msg) => {
    io.emit("message", mg);
  });
  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(3000, () => console.log("Chat server running on port 3000"));
