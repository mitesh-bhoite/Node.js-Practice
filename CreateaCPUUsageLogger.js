// Create a CPU Usage Logger
const os = require("os");
setInterval(() => {
  const usage = os.loadavg();
  console.log(`CPU Usage: ${usage[0].toFixed(2)}`);
});
