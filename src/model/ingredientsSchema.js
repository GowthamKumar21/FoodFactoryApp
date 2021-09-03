const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema(
  {
    name: String,
    lotNumber: { type: Number, unique: true, required: true },
    availableQuantity: Number,
    thresholdQuantity: Number,
    price: Number,
    vendorName: String,
    vendorEmail: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Ingredients", ingredientsSchema);
