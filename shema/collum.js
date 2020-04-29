const mongoose = require("mongoose");



const todosSchema = new mongoose.Schema({
  tasks: {
    type: Array,
    task: {
      _id: {type: String, required: true},
      name: String
    },
    required: false
  },
  collums:{
    type: Array,
    required: false
  }
});

module.exports = todos = mongoose.model("todos", todosSchema);
