import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, description, price, color, category } = req.body;

    if (!title || !description || !price || !category) {
      return ErrorHandler(
        res,
        401,
        "Please enter all the fields to insert a product"
      );
    }

    const titleExist = await Product.findOne({ title });
    if (titleExist) {
      return ErrorHandler(res, 402, "Title is already taken");
    }

    const slug = title
      .toString()
      .split(" ")
      .map((title) => {
        return title.toLowerCase();
      })
      .join("-");

    const product = await Product.create({
      title,
      slug,
      description,
      price,
      category,
    });

    for (let i = 0; i < color.length; i++) {
      const colorElement = color[i];
      const sizeArray = colorElement[Object.keys(colorElement)[0]];

      const sizes = sizeArray.map((size) => {
        const sizeElement = Object.keys(size)[0];
        return {
          value: sizeElement,
          inStock: size[sizeElement],
        };
      });

      product.color.push({
        value: Object.keys(colorElement)[0],
        availableSizes: sizes,
      });
    }

    await product.save();

    return SuccessHandler(res, 200, "Product added successfully", product);
  }
};

export default connectToDatabase(handler);
