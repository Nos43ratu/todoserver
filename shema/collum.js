const mongoose = require("mongoose");
const task = require("../shema/tasks");
const Schema = mongoose.Schema;
const collumSchema = new mongoose.Schema({
  name: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: "tasks" }],
  color: String,
});

module.exports = collum = mongoose.model("collum", collumSchema);
