import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import mailgun from 'mailgun-js';
import {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
} from '../../../../data/environmentVariables_2';

const mg = mailgun({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN,
  host: 'api.mailgun.net', // Explicitly set the host
});

export const sendEmailWithMailgunController = myControllerHandler(
  async (req, res) => {
    const { email, text, subject = 'Your Subject Here' } = req.body;

    // Validate required fields
    if (!email || !text) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Email and text are required',
        success: false,
      });
    }

    const data = {
      from: 'apurbooffice707@gmail.com',
      to: email,
      subject: subject,
      text: text,
    };

    try {
      // Using promise-based approach instead of callback
      const body = await new Promise((resolve, reject) => {
        mg.messages().send(data, (error, body) => {
          if (error) return reject(error);
          resolve(body);
        });
      });

      return res.status(StatusCodes.OK).json({
        message: 'Email sent successfully',
        success: true,
        data: body,
      });
    } catch (error) {
      console.error('Mailgun Error:', error);

      // More detailed error response
      const errorResponse = {
        message: 'Failed to send email',
        success: false,
        error: {
          message: error.message,
          statusCode: error.statusCode,
          details: 'Check Mailgun API key, domain, and authorized recipients',
        },
      };

      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(errorResponse);
    }
  }
);
