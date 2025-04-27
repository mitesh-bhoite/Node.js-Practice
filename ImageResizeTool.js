//Image Resize Tool .
const sharp = require("sharp");

sharp("input.jpg")
  .resize(300, 300)
  .toFile("resized.jpg", (err, info) => {
    if (err) console.error(err);
    else console.log("Image i resized!");
  });
