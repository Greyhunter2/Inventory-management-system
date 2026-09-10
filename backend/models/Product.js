const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: randomUUID,
      unique: true,
      index: true
    },

    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },

    description: {
      type: String,
      trim: true,
      default: ""
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"]
    },

    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity cannot be negative"],
      default: 0
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },

minStock: {
    type: Number,
    required: [true, "Minimum stock is required"],
    min: [0, "Minimum stock cannot be negative"],
    default: 5
}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);