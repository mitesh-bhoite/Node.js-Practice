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

app.get("/:shortUrl", (req, res) => {
  const longUrl = urls[req.params.shortUrl];
  if (longUrl) res.redirect(longUrl);
  else res.status(404).send("URL not found");
});

app.listen(3000, () => console.log("URL Shortener running on port 3000"));
