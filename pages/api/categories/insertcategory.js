import connectToDatabase from "../../../middlewares/connect";
import { SuccessHandler } from "../../../middlewares/responseMessage";
import Category from "../../../models/Category";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name } = req.body;

    const category = await Category.create({
      name,
    });
    await category.save();

    return SuccessHandler(res, 200, "Category added successfully", category);
  }
};

export default connectToDatabase(handler);
