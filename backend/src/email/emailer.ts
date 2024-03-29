import nodemailer from 'nodemailer';
require("dotenv").config();

const email = async (filename: string, email: string) => {
  console.log(`Sending email to ${email} ...`)
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT!),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  await transport.sendMail({
    from: `"Vanity Press" <${process.env.SMTP_USER}>`,
    to: `${email}, ${email}`,
    subject: 'Your ebook is ready!',
    text: 'Please enjoy your bespoke, artisinal collection of articles!',
    attachments:[
      {
        filename,
        path: './' + filename,
        contentType: 'application/epub+zip'
      }
    ]
  }).then(info => {
    console.log(`Email sent. Accepted: ${info.accepted}\nRejected: ${info.rejected}\nPending: ${info.pending || 'none'}.\nResponse: ${info.response}.\n\n`)
    return
  }).catch(err => { 
    console.error(err)
    return err 
  });
};

export { email };