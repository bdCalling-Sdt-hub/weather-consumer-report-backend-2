import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { assetCategoryModel } from '../model/category.model';

export const getAllCategoryController = myControllerHandler(
  async (req, res) => {
    const allCategory = await assetCategoryModel.find({});
    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: allCategory,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
