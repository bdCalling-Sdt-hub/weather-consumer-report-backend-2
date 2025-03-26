import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { unapprovedCategoryModel } from '../model/unapprovedCategory.model';

export const getSingleUnapprovedDataController = myControllerHandler(
  async (req, res) => {
    const { id } = req.params;
    const data = await unapprovedCategoryModel.findOne({ id });
    if (!data) {
      return res.status(404).json({
        message: 'category does not exist',
      });
    }
    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: data,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
