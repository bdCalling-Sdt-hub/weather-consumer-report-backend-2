import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import axios from 'axios';
import {
  MAILCHIMP_AUDIENCE_ID,
  MAILCHIMP_API_KEY,
} from '../../../../data/environmentVariables_2';

export const sendEmailByMailChimpController = myControllerHandler(
  async (req, res) => {
    const { email, text } = req.body;

    try {
      // Step 1: Create the campaign
      const createCampaignResponse = await axios.post(
        `https://us6.api.mailchimp.com/3.0/campaigns`,
        {
          type: 'regular',
          recipients: {
            list_id: MAILCHIMP_AUDIENCE_ID, // Audience ID
          },
          settings: {
            subject_line: 'Your Subject Here', // Set your email subject
            title: 'Campaign Title', // A title for the campaign
            from_name: 'Your Name or Business',
            reply_to: email, // Reply-to address can be the one provided in the request
          },
        },
        {
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`, // Authentication
          },
        }
      );

      const campaignId = createCampaignResponse.data.id; // Get the campaign ID

      // Step 2: Add content to the campaign
      await axios.put(
        `https://us6.api.mailchimp.com/3.0/campaigns/${campaignId}/content`,
        {
          html: text, // HTML content (text you pass in the request)
        },
        {
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      // Step 3: Send the campaign
      await axios.post(
        `https://us6.api.mailchimp.com/3.0/campaigns/${campaignId}/actions/send`,
        {},
        {
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      // Successful response
      const myResponse = {
        message: 'Email sent successfully',
        success: true,
        data: {},
      };
      res.status(StatusCodes.OK).json(myResponse);
    } catch (error) {
      // Error handling
      console.error('Error sending email via Mailchimp:', error);
      const errorResponse = {
        message: 'Failed to send email',
        success: false,
        data: {},
      };
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  }
);
