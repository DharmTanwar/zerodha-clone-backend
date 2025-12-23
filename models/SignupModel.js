const { SignupSchema } = require("../schemas/SignpSchema");
const { model } = require("mongoose");

const User = new model("User", SignupSchema);

module.exports = User ;
