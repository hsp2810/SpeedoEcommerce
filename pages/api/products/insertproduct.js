import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, description, inStock, isAvailable, category } = req.body;

    if (!title || !description || !inStock || !isAvailable || !category) {
      return ErrorHandler(
        res,
        401,
        "Please enter all the fields to insert a product"
      );
    }

    const titleExist = await Product.findOne({ title });

    if (titleExist) {
      return ErrorHandler(res, 402, "Product is already added");
    }

    const product = await Product.create({
      title,
      description,
      inStock,
      isAvailable,
      category,
    });
    await product.save();

    return SuccessHandler(res, 200, "Product added successfully", product);
  }
};

export default connectToDatabase(handler);
