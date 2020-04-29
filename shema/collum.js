const mongoose = require("mongoose");
const collumSchema = new mongoose.Schema({
  collum: {
    name: String,
    items: Array,
    color: String,
  },
});

module.exports = collum = mongoose.model("collum", collumSchema);
