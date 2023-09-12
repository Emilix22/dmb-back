const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "torresdragon@hotmail.com",
      pass: "vadaju20",
    },
  });

module.exports = transporter  