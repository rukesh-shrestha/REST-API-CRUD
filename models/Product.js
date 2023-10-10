import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Missing Product Name"],
      lowercase: true,
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Missing Product Brand"],
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Missing Product Description"],
    },
    price: {
      type: Number,
      required: [true, "Missing Product Price"],
    },
    image: {
      type: String,
      required: [true, "Missing Product Images"],
      default: "https://placehold.co/300x200.png",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
