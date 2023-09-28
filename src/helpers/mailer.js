const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "c1590039.ferozo.com", //c1590039.ferozo.com  || smtp.office365.com
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "siniestros@dmbconsultores.com.ar", //siniestros@dmbconsultores.com.ar  ||  torresdragon@hotmail.com
      pass: "Europa16", //Europa16  ||  vadaju20
    },
  });

module.exports = transporter  