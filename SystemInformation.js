//System information
const os = require("os");

console.log(`CPU: ${os.cpus().length} cores`);
console.log(`Memory: ${os.totalmem() / 1e9} GB`);
console.log(`OS: ${os.platform()}`);
