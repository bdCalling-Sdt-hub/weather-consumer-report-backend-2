import nodemailer from 'nodemailer';
import {
  NODEMAILER_HOST,
  NODEMAILER_PASSWORD,
  NODEMAILER_PORT,
  NODEMAILER_SECURE_STATUS,
  NODEMAILER_SERVICE,
  NODEMAILER_USER,
} from '../../data/environmentVariables_2';

// Create a transporter
export const nodemailerTransporter = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  secure: NODEMAILER_SECURE_STATUS,
  service: NODEMAILER_SERVICE, // false for 587, true for 465
  auth: {
    user: NODEMAILER_USER, // Replace with your email
    pass: NODEMAILER_PASSWORD, // Replace with your password
  },
});
console.log({
  NODEMAILER_HOST,
  NODEMAILER_PASSWORD,
  NODEMAILER_PORT,
  NODEMAILER_SERVICE,
  NODEMAILER_USER,
  NODEMAILER_SECURE_STATUS,
});
// Verify the connection
nodemailerTransporter
  .verify()
  .then(() => {
    console.log('📧  Connected to email server ar7');
  })
  .catch(error => {
    console.error('Unable to connect to email server ar7:', error);
  });

// Example of sending an email
const sendEmail = async () => {
  const mailOptions = {
    from: 'sh543132@gmail.com', // Replace with your email
    to: 'apurboroy7077@gmail.com', // Recipient email
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer!',
  };

  try {
    const info = await nodemailerTransporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Call the send email function
sendEmail();
