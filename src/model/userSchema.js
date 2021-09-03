const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    status: String,
    lastLoginAt: Date,
    createdAt: Date,
    updatedAt: Date,
    password: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
