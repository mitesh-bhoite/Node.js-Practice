//for client.js
const net = require("net");
const client = net.createConnection({ port: 5000 }, () => {});
