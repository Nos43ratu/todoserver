const mongoose = require("mongoose");
const collum = require("../shema/collum");
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
  collums: [{ type: Schema.Types.ObjectId, ref: "collum" }],
});

module.exports = todo = mongoose.model("todo", todoSchema);
