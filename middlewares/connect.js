import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const URI = process.env.MONGO_URI;

const connectToDatabase = (handler) => async (req, res) => {
  // Connection is already established
  if (mongoose.connection.readyState === 1) {
    return handler(req, res);
  }
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected");
  return handler(req, res);
};

export default connectToDatabase;
