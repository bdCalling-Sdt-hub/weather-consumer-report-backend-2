import { nodemailerTransporter } from '../config/nodemailer/nodemailer.config';

export const sendPasswordResetConfirmation = (
  nameOfUser: string,
  emailOfUser: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const myEmail = {
        to: emailOfUser,
        from: 'your-email@example.com', // Replace with your email address
        subject: 'Password Reset Successful',
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
            <h2>Password Reset Successful</h2>
            <p>Hey ${nameOfUser},</p>
            <p>Your password has been successfully reset. If you did not request this change, please contact support immediately.</p>
            <div class="footer">
              <p>Best Regards, <br> The Accountability World Team</p>
              <p><a href="https://accountabilityworld.org">Visit our website</a></p>
            </div>
          </div>
        </body>
      </html>
        `,
      };

      nodemailerTransporter.sendMail(myEmail, (error, info) => {
        if (error) {
          console.error('Error:', error);
          reject(error);
        } else {
          console.log('Email sent:', info.response);
          resolve('Email Sent');
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
