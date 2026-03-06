const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function sendEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
}

function makeCall(to, message) {
  client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to,
    from: process.env.TWILIO_PHONE_NUMBER
  }, (err, call) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Call initiated: ' + call.sid);
    }
  });
}

module.exports = { sendEmail, makeCall };