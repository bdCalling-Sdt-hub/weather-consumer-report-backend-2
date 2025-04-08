import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { sendContactUsEmail } from '../../../../helpers/sendOwnerEmailOfContactUs';
import {
  CONTACT_EMAIL_1,
  CONTACT_EMAIL_2,
  ownerEmail,
} from '../../../../data/environmentVariables';
import { sendContactUsEmail_2 } from '../../../../helpers/sendOwnerEmailOfContactUs_2';

export const contactusController = myControllerHandler(async (req, res) => {
  const { nameOfUser, emailOfUser, messageOfUser } = req.body;
  await sendContactUsEmail_2(
    nameOfUser,
    emailOfUser,
    messageOfUser,
    CONTACT_EMAIL_1
  );
  await sendContactUsEmail_2(
    nameOfUser,
    emailOfUser,
    messageOfUser,
    CONTACT_EMAIL_2
  );

  const myResponse = {
    message: 'Review Given Successfully',
    success: true,
    data: {},
  };
  res.status(StatusCodes.OK).json(myResponse);
});
