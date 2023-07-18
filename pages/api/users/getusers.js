import connectToDatabase from "../../../middlewares/connect";
import {
  ErrorHandler,
  SuccessHandler,
} from "../../../middlewares/responseMessage";
import User from "../../../models/User";

const handler = async (req, res) => {
  const users = await User.find();
  if (users.length === 0) {
    return ErrorHandler(res, 401, "No users found");
  }

  return SuccessHandler(res, 200, "Users fetched successfully", users);
};

export default connectToDatabase(handler);
