const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    status: String,
    orderNum: { type: Number, unique: true, required: true },
    orderDate: Date,
    dateOfdelivery: Date,
    modeOfTransport: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Order", orderSchema);
