import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const products = await Product.find();
  if (products.length === 0) {
    return ErrorHandler(res, 401, "No products found");
  }

  return SuccessHandler(res, 200, "products fetched successfully", products);
};

export default connectToDatabase(handler);
