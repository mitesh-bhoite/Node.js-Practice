//Create a Countdown Timer
const seconds = 10;
let counter = seconds;
const interval = setInterval(() => {
  console.log(counter--);
  if (counter < 0) {
    console.log("Time’s up!");
    clearInterval(interval);
  }
});
