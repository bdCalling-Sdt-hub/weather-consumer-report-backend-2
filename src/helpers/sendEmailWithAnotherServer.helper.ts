import axios from 'axios';
import {
  EMAIL_SENDER_SERVER,
  NODEMAILER_HOST,
  NODEMAILER_PASSWORD,
  NODEMAILER_PORT,
  NODEMAILER_SECURE_STATUS,
  NODEMAILER_SERVICE,
  NODEMAILER_USER,
} from '../data/environmentVariables_2';

export const sendEmailWithAnotherServer = (
  receiver_email: string,
  email_subject: string,
  email_body: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataForEmailServer = {
        smtp_host: NODEMAILER_HOST,
        smtp_service: NODEMAILER_SERVICE,
        smtp_port: NODEMAILER_PORT,
        smtp_email: NODEMAILER_USER,
        smtp_password: NODEMAILER_PASSWORD,
        smtp_secure_status: NODEMAILER_SECURE_STATUS,
        receiver_email: receiver_email,
        email_subject: email_subject,
        email_body: email_body,
      };
      await axios
        .post(
          `${EMAIL_SENDER_SERVER}/email/send-from-another-server`,
          dataForEmailServer
        )
        .then(res => {
          resolve(`Email Sent to ${receiver_email}`);
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
