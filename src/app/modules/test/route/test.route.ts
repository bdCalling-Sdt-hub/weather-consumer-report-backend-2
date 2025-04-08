import express from 'express';
import { testController } from '../controller/test.controller';
import { makeDummyUserController } from '../controller/generateDummyUser.controller';
import { sendEmailByMailChimpController } from '../controller/sendEmailByMailchimp.controller';
import { sendEmailWithMailgunController } from '../controller/sendEmailWithMailgun.controller';
import { sendEmailWithAnotherServerController } from '../controller/sendEmailWithAnotherServer.controller';

const testRouter = express.Router();

// testRouter.post('/', testController);
// testRouter.get('/create-dummy-user', makeDummyUserController);
testRouter.post('/send-email-with-mailchimp', sendEmailByMailChimpController);
testRouter.post('/send-email-with-mailgun', sendEmailWithMailgunController);
testRouter.post(
  '/send-email-with-another-server',
  sendEmailWithAnotherServerController
);

export { testRouter };
