import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { unapprovedCategoryModel } from '../model/unapprovedCategory.model';

export const getUnapprovedCategoryDataController = myControllerHandler(
  async (req, res) => {
    const myData = await unapprovedCategoryModel.find({});

    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: myData,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
