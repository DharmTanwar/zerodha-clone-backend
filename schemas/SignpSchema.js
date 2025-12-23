const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const SignupSchema = new Schema({
  email: {
    type: String,
    required: [true, "enter your email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
SignupSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { SignupSchema };
