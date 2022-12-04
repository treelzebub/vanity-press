import nodemailer from 'nodemailer';
require("dotenv").config();

const email = async (filename: string, email: string) => {
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
  await transport.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: '',
    text: '',
    attachments:[
      {
        filename
      }
    ]
  }).then(info => {
    console.log(`Email sent. Accepted: ${info.accepted}.\nRejected: ${info.rejected}.\nPending: ${info.pending}.\nResponse: ${info.response}.\n\n`)
  }).catch(err => console.error(err));
};

export { email };