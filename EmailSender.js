//Email Sender

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "your_email@gmail.com", pass: "your_password" },
});
const mailOptions = {
  from: "your_email@gmail.com",
  to: "receiver_email@gmail.com",
  subject: "Test Email",
  text: "Hello from Node.js!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.error(err);
  else console.log("Email  sent: " + info.response);
});
