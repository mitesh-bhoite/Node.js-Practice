// Create a CPU Usage Logger
const os = require("os");
setInterval(() => {
  const usage = os.loadavg();
});
