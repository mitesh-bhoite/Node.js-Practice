//Terminal Weather App (using API)
const axios = require("axios");
const city = process.argv[2];
axios
  .get(`https://wttr.in/${city}?format=3`)
  .then((res) => console.log(res.data));
