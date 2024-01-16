const nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: "c1590039.ferozo.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "siniestros@dmbconsultores.com.ar",
      pass: "Europa16",
    },
  });

module.exports = transporter