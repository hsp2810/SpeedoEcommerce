import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      length: [50, "Cannot exceed 20 characters"],
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      length: [500, "Cannot exceed 500 characters"],
    },

    price: {
      type: Number,
      default: 0,
      required: true,
    },

    color: [
      {
        value: {
          type: String,
        },

        availableSizes: [
          {
            value: {
              type: String,
            },

            inStock: {
              type: Number,
            },
          },
        ],
      },
    ],

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
