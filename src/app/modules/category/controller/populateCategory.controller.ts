import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { categoryData2 } from '../../../../data/category/category_2';
import { assetCategoryModel } from '../model/category.model';

export const populateCategoryController = myControllerHandler(
  async (req, res) => {
    for (let i = 0; i < categoryData2.length; i++) {
      const singleCategoryName = categoryData2[i];
      await assetCategoryModel.create({
        categoryName: singleCategoryName,
      });
    }

    const myResponse = {
      message: 'category created successfully',
      success: true,
      data: {},
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
