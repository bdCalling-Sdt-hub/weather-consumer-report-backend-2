import { nodemailerTransporter } from '../config/nodemailer/nodemailer.config';
import { sendEmailWithAnotherServer } from './sendEmailWithAnotherServer.helper';

export const sendOtpViaEmail2 = (
  nameOfUser: string,
  emailOfUser: string,
  otp: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const myEmail = {
        to: emailOfUser,
        from: 'apurboroy7077@gmail.com', // Replace with your email address
        subject: `Your OTP for Verification`,
        html: `
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f7fc;
              color: #333;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #2b6cb0;
              padding: 20px;
              text-align: center;
              color: white;
              border-radius: 8px 8px 0 0;
              font-size: 28px;
            }
            h2 {
              text-align: center;
              font-size: 18px;
              color: #4a5568;
              margin-bottom: 25px;
            }
            p {
              line-height: 1.6;
              font-size: 16px;
              margin-bottom: 20px;
            }
            .otp {
              font-size: 22px;
              font-weight: bold;
              color: #ffffff;
              background-color: #2b6cb0;
              text-align: center;
              padding: 15px;
              border-radius: 6px;
              margin: 25px 0;
              letter-spacing: 2px;
              width: fit-content;
              margin: 20px auto;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 14px;
              color: #aaa;
            }
            .footer a {
              color: #2b6cb0;
              text-decoration: none;
            }
            .footer p {
              margin-top: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              Accountability World
            </div>
            <h2>Thank you for signing up in accountabilityworld.org</h2>
            <p>Hi ${nameOfUser},</p>
            <p>Thank you for signing up! To complete your registration, please use the OTP below to verify your email address:</p>
            <div class="otp">${otp}</div>
            <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>
            <p>If you did not request this, please ignore this email.</p>
            <div class="footer">
              <p>Best Regards, <br> The Accountability World Team</p>
              <p><a href="https://accountabilityworld.org">Visit our website</a></p>
            </div>
          </div>
        </body>
      </html>
        `,
      };

      sendEmailWithAnotherServer(myEmail.to, myEmail.subject, myEmail.html)
        .then(res => {
          resolve('Email Sent successful');
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
