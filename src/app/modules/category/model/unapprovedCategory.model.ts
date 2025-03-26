import { ar7id } from '../../../../utils/unique_id/ar7id';

import mongoose from 'mongoose';

const unapprovedCategorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => 'unapproved_category_' + ar7id(),
    },
    categoryName: {
      type: String,
      required: true,
    },
    categoryImageUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const unapprovedCategoryModel = mongoose.model(
  'unapproved_categories',
  unapprovedCategorySchema
);
