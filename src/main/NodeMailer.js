import credentials from './ENV';

const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main(message) {
  // create reusable transporter object using the default SMTP transport
  // https://kinsta.com/blog/gmail-smtp-server/
  let transporter = nodemailer.createTransport({
    host: credentials.host,
    port: credentials.port,
    secure: credentials.secure, // true for 465, false for other ports
    auth: {
      user: credentials.userName,
      pass: credentials.password,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: message.from, // sender address
    to: message.to, // list of receivers
    subject: message.subject, // Subject line
    text: message.text, // plain text body
    html: message.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default main;
