import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ProductModel = model("products", ProductSchema);

export default ProductModel;
