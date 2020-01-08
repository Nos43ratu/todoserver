const mongoose = require("mongoose");

const signup = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cook: {
    type: Boolean,
    required: true
  }
});

module.exports = Signup = mongoose.model("signup", signup);
