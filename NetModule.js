// Build a Local Chat CLI App (Net Module)
const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Welcome to CLI Chat!\n");
  socket.on("data", (data) => {
    console.log("Client:", data.toString());
  });
});

server.listen(5000, () => console.log("Chat server on port 5000"));
