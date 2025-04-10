import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { assetCategoryModel } from '../model/category.model';

export const getTotalNumberOfCategoryController = myControllerHandler(
  async (req, res) => {
    const totalNumber = await assetCategoryModel.countDocuments({});
    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: totalNumber,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
