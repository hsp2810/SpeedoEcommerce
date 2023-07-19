// CRUD related to one product
import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { id } = req.query;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return ErrorHandler(res, 401, "Product not found");
  }

  return SuccessHandler(res, 200, "Product fetched successfully", product);
};

export default connectToDatabase(handler);
