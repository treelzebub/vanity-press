import nodemailer from 'nodemailer';
require("dotenv").config();

const email = async () => {
  // const account = await nodemailer.createTestAccount();

  // const transport = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST || account.smtp.host,
  //   port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : account.smtp.port,
  //   secure: process.env.SMTP_SECURE ? true : account.smtp.secure,
  //   auth: {
  //     user: process.env.SMTP_USER || account.user,
  //     pass: process.env.SMTP_PASS || account.pass,
  //   },
  // });

  console.log(`User from .env: ${process.env.SMTP_USER}`);

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST!!!,
    port: parseInt(process.env.SMTP_PORT!),
    secure: process.env.SMTP_SECURE === 'yes' ? true : false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  console.log(`Transport created.`);

  const info = await transport.sendMail({
    from: `"Vanity" <${process.env.SMTP_SENDER}>`,
    to: process.env.TEST_RECIPIENT,
    subject: "Hello",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
};

export { email };