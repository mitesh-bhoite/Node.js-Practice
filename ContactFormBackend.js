//Contact Form Backend (with Nodemailer)
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport;
});
