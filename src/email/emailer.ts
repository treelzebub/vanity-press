import nodemailer from 'nodemailer';
require("dotenv").config();

const email = async () => {
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT!),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  console.log('Sending email...')
  const info = await transport.sendMail({
    from: `"Vanity Press" <${process.env.SMTP_USER}>`,
    to: process.env.TEST_RECIPIENT,
    subject: "Hello",
    text: "Hello world?",
    html: "<b>Hello world?</b>"
  });

  console.log("Message sent: %s", info.messageId);
};

export { email };