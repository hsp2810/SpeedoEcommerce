import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      length: [50, "Cannot exceed 20 characters"],
    },

    description: {
      type: String,
      required: true,
      length: [500, "Cannot exceed 500 characters"],
    },

    inStock: {
      type: Number,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
export default mongoose.model("products", productSchema);
