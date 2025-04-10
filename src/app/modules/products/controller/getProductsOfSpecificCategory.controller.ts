import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { assetCategoryModel } from '../../category/model/category.model';
import { myProductModel } from '../model/products.model';

export const getProductsOfSpecificCategoryController = myControllerHandler(
  async (req, res) => {
    const { id } = req.params;

    const categoryData = await assetCategoryModel.findOne({ id });
    if (!categoryData) {
      throw new Error('category does not exists with this id');
    }
    const { categoryName } = categoryData;
    const data = await myProductModel.find({
      category: categoryName,
    });

    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: data,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
