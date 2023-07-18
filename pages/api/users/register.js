import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import User from "../../../models/User";
import Category from "../../../models/Category";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { username, name, email, password } = req.body;

    const checkEmail = await User.findOne({ email });
    const checkUsername = await User.findOne({ username });

    if (checkEmail) {
      return ErrorHandler(res, 401, "Email is already registered");
    }

    if (checkUsername) {
      return ErrorHandler(res, 402, "Username is already taken");
    }

    const user = await User.create({ username, name, email, password });
    await user.save();

    return SuccessHandler(res, 200, "Users registered successfully", user);
  }
};

export default connectToDatabase(handler);
