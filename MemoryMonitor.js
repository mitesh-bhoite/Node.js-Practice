//CPU Temperature & Memory Monitor (Linux only)
const { exec } = require("child_process");
exec("sensors", (err, stdout) => {
  if (err) return console.log("Run `sudo apt install lm-sensors` first.");
  console.log(stdout);
});
