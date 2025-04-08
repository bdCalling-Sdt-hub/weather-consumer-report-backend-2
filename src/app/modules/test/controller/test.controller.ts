import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { getDataFromFormOfRequest } from '../../../../helpers/getDataFromFormAR7';

export const testController = myControllerHandler(async (req, res) => {
  const myData = await getDataFromFormOfRequest(req);
  const exampleFile = myData.files['members[0][memberImage]'][0];

  const myResponse = {
    message: 'test Given Successfully',
    success: true,
    data: {},
  };
  res.status(StatusCodes.OK).json(myResponse);
});
