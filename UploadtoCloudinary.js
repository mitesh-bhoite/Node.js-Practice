//Upload to Cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "your_cloud",
  api_key: "your_key",
  api_secret: "your_secret",
});
cloudinary.uploader.upload("image.jpg", (err, result) => {});
