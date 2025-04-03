const express = require("express");
const shortid = require("shortid");

const app = express();
app.use(express.json());

const urls = {};

app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate();
  urls[shortUrl] = longUrl;
  res.json({ shortUrl: `http://localhost:3000/${shortUrl}` });
});
