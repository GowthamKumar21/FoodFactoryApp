import User from "../model/userSchema";
import Food from "../model/foodSchema";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    status: String,
    orderNum: { type: Number, unique: true, required: true },
    orderDate: Date,
    dateOfdelivery: Date,
    modeOfTransport: String,
    user: { type: Schema.Types.ObjectId, ref: User, required: false },
    food: { type: Schema.Types.ObjectId, ref: Food, required: false },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Order", orderSchema);
