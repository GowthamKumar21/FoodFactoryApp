const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: String,
    createdAt: Date,
    cuisine: String,
    ingredients: String,
    lotNumber: { type: Number, unique: true, required: true },
    costOfProduction: Number,
    sellingCost: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Food", foodSchema);
