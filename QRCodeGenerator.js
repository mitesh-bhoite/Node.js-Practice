//QR Code Generator
const qr = require("qrcode");

qr.toFile("qrcode.png", "https://example.com", (err) => {
  if (err) console.error(err);
  else console.log("QR Code generated!");
});
