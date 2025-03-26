import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import { unapprovedCategoryModel } from '../model/unapprovedCategory.model';
import { assetCategoryModel } from '../model/category.model';

export const approveOrRejectCategoryController = myControllerHandler(
  async (req, res) => {
    const { categoryId, action } = req.body;

    const unapprovedCategoryData = await unapprovedCategoryModel.findOne({
      id: categoryId,
    });
    if (!unapprovedCategoryData) {
      return res.status(404).json({ message: 'category does not exist' });
    }

    if (!(action === 'approve' || action === 'reject')) {
      return res
        .status(400)
        .json({ message: `action can only be "approve" or "reject"` });
    }

    if (action === 'reject') {
      await unapprovedCategoryData.deleteOne();
      return res.status(200).json({
        message: 'Request of adding category deleted successfully',
        data: unapprovedCategoryData,
      });
    }

    if (action === 'approve') {
      const categoryData2 = await assetCategoryModel.create({
        categoryName: unapprovedCategoryData.categoryName,
        categoryImageUrl: unapprovedCategoryData.categoryImageUrl,
      });

      await unapprovedCategoryData.deleteOne();
      return res.status(200).json({
        message: 'Category data approved successfully',
        data: categoryData2,
      });
    }

    const myResponse = {
      message: 'Review Given Successfully',
      success: true,
      data: {},
    };
    res.status(StatusCodes.OK).json(myResponse);
  }
);
