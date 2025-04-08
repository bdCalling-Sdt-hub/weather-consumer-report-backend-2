import { nodemailerTransporter } from '../config/nodemailer/nodemailer.config';
import { sendEmailWithAnotherServer } from './sendEmailWithAnotherServer.helper';

export const sendWelcomeEmail2 = (nameOfUser: string, emailOfUser: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const welcomeEmail = {
        to: emailOfUser,
        from: 'apurboroy7077@gmail.com', // Replace with your email address
        subject: `Welcome to the Weathers Consumer Report!`,
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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              Weathers Consumer Report
            </div>
            <p>Hi ${nameOfUser},</p>
            <p>Thank you for creating a profile and joining our movement! We hope you have reviewed our Mission and Vision Statements and are on board with improving the consumer market.</p>
            <p>Please be mindful of our Terms & Conditions. It is of the utmost importance that we provide a “safe space”. Therefore, no trolling, defamation of character, profanity, and inappropriate content will be tolerated.</p>
            <p>Welcome, once again! Please post reviews often and share the website with others. Thank you in advance for your cooperation and support!</p>
            <div class="footer">
              <p>Best Regards, <br> The Weathers Consumer Report Team</p>
              <p><a href="https://weathersconsumerreport.org">Visit our website</a></p>
            </div>
          </div>
        </body>
      </html>
        `,
      };

      await sendEmailWithAnotherServer(
        welcomeEmail.to,
        welcomeEmail.subject,
        welcomeEmail.html
      )
        .then(res => {
          resolve('welcome message send');
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
