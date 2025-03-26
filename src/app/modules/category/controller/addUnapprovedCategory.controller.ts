import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { getDataFromFormOfRequest } from '../../../../helpers/getDataFromFormAR7';
import { saveAndGiveRefinedUrl } from '../../../../helpers/saveAndGiveRefinedLink';
import { unapprovedCategoryModel } from '../model/unapprovedCategory.model';
import { assetCategoryModel } from '../model/category.model';

export const addUnapprovedCategoryController = myControllerHandler(
  async (req, res) => {
    const formData = await getDataFromFormOfRequest(req);
    const { category_name } = formData.fields;
    const { category_image } = formData.files;

    if (!category_name) {
      throw new Error('please enter category name');
    }
    if (!category_image) {
      throw new Error('please enter category image');
    }

    const existingData = await assetCategoryModel.findOne({
      categoryName: category_name,
    });

    if (existingData) {
      return res.status(409).json({
        message: 'this category already exists',
        data: existingData,
      });
    }

    const categoryImageSrc = await saveAndGiveRefinedUrl(
      category_image[0],
      './public/images/category'
    );

    const categoryData = await unapprovedCategoryModel.create({
      categoryName: category_name[0],
      categoryImageUrl: categoryImageSrc,
    });

    const myResponse = {
      message: 'Category Request Successfull',
      success: true,
      data: categoryData,
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
