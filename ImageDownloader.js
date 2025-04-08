//Image Downloader
const axios = require("axios");
const fs = require("fs");

const url = "https://example.com/image.jpg";
axios({ url, responseType: "stream" }).then((response) => {
  response.data.pipe(fs.createWriteStream("downloaded.jpg"));
});
