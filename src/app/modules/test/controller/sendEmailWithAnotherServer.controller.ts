import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import {
  EMAIL_SENDER_SERVER,
  NODEMAILER_HOST,
  NODEMAILER_PASSWORD,
  NODEMAILER_PORT,
  NODEMAILER_SECURE_STATUS,
  NODEMAILER_SERVICE,
  NODEMAILER_USER,
} from '../../../../data/environmentVariables_2';
import axios from 'axios';

export const sendEmailWithAnotherServerController = myControllerHandler(
  async (req, res) => {
    const dataForEmailServer = {
      smtp_host: NODEMAILER_HOST,
      smtp_service: NODEMAILER_SERVICE,
      smtp_port: NODEMAILER_PORT,
      smtp_email: NODEMAILER_USER,
      smtp_password: NODEMAILER_PASSWORD,
      smtp_secure_status: NODEMAILER_SECURE_STATUS,
      receiver_email: 'apurbooffice707@gmail.com',
      email_subject: 'test subject 7',
      email_body: 'test email 7',
    };
    await axios
      .post(
        `${EMAIL_SENDER_SERVER}/email/send-from-another-server`,
        dataForEmailServer
      )
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: {},
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
