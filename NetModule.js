// Build a Local Chat CLI App (Net Module)
const net = require("net");
const server = net.createServer((socket) => {
  socket.write("Welcome to CLI Chat!\n");
  socket.on("data", (data) => {});
});
