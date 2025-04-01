// this for task schedule
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("Running a task every minute");
});
