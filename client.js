//for client.js
const net = require("net");

const client = net.createConnection({ port: 5000 }, () => {
  console.log("Connected to server");
  process.stdin.on("data", (data) => {
    client.write(data);
  });
});
