//Real-time Bitcoin Price Tracker...
const axios = require("axios");

setInterval(async () => {
  const response = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  console.log(`Bitcoin Price: ${response.data.bpi.USD.rate}`);
}, 5000);
