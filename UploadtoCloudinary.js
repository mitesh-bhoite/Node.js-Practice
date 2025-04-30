//Upload to Cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({});
cloudinary.uploader.upload("image.jpg", (err, result) => {
  if (err) return console.error(err);
  console.log(result.secure_url);
});
