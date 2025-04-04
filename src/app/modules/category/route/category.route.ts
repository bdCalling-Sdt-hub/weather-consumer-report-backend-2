import express from 'express';
import { addCategoryController } from '../controller/addCategory.controller';
import { deleteCategoryController } from '../controller/deleteCategory.controller';
import { updateCategoryController } from '../controller/updateCategory.controller';
import { getCategoryController } from '../controller/getCategory.controller';
import { getSingleCategoryController } from '../controller/getSingleCategoryData.controller';
import { getCategory2Controller } from '../controller/getCategory2.controller';
import { getCategory3Controller } from '../controller/getCategory3.controller';
import { addBulkCategoryController } from '../controller/addCategoryDummy.controller';
import { getCategorySuggestionController } from '../controller/getCategorySuggestion.controller';
import { addUnapprovedCategoryController } from '../controller/addUnapprovedCategory.controller';
import { getUnapprovedCategoryDataController } from '../controller/getDataOfUnapprovedCategory.controller';
import { getSingleUnapprovedDataController } from '../controller/getSingleUnapprovedData.controller';
import { approveOrRejectCategoryController } from '../controller/approveOrRejectCategory.controller';

const categoryRouter = express.Router();

categoryRouter.get('/', getCategoryController);
categoryRouter.get('/get-category-2', getCategory2Controller);
categoryRouter.get('/get-category-3', getCategory3Controller);
categoryRouter.get('/:id', getSingleCategoryController);
categoryRouter.post('/add', addCategoryController);
categoryRouter.delete('/:id', deleteCategoryController);
categoryRouter.patch('/:id', updateCategoryController);
categoryRouter.post('/add-bulk-category', addBulkCategoryController);
categoryRouter.get(
  '/get-category-suggestion/:search_text',
  getCategorySuggestionController
);
categoryRouter.post(
  '/add-unapproved-category',
  addUnapprovedCategoryController
);
categoryRouter.get(
  '/unapproved/get-data-of-unapproved-category',
  getUnapprovedCategoryDataController
);
categoryRouter.get(
  '/unapproved/get-data-of-unapproved-category/:id',
  getSingleUnapprovedDataController
);
categoryRouter.post(
  '/unapproved/approve-or-reject',
  approveOrRejectCategoryController
);

export { categoryRouter };
