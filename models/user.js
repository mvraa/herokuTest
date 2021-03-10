const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: String
});

const User = mongoose.model("User", userSchema);

User.createIndexes();

module.exports = User;
