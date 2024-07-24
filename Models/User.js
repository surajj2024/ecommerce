const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
    default: "-",
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["CUSTOMER", "SELLER", "ADMIN"],
  },
  token: {
    type: String,
    required: false,
    default: "",
  },
  wishlist: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
    ref: "products",
  },
});

const UserSchema = mongoose.model("users", userSchema);

module.exports = UserSchema;
