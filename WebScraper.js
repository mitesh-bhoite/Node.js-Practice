//Web Scraper
const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://example.com";

axios
  .get(url)
  .then((response) => {
    const $ = cheerio.load(response.data);
    console.log($("h1").text());
  })
  .catch((err) => console.error(err));
