import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { assetCategoryModel } from '../model/category.model';

export const getCategoryAccordingToPageController = myControllerHandler(
  async (req, res) => {
    const { pageNumber } = req.body;

    // Set the number of items per page
    const itemsPerPage = 30;

    // Calculate the skip value based on the page number
    const skipValue = (pageNumber - 1) * itemsPerPage;

    // Fetch the data with pagination
    const data = await assetCategoryModel
      .find({})
      .skip(skipValue)
      .limit(itemsPerPage);

    // Respond with the data
    const myResponse = {
      message: 'Categories fetched successfully',
      success: true,
      data: data,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
