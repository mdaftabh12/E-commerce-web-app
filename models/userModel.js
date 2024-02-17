const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
    fullName: String,
    email: String,
    phoneNumber: String,
    photo: String,
    dateOfBirth: String,
    role: {
      type: String,
      enum: ["USER", "ADMIN", "SUPER ADMIN"],
      default: "USER",
    },
    address: {
      type: mongoose.Types.ObjectId,
      ref: "addressModel",
    },
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "addressModel",
      },
    ],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userModel", userSchema);
