const mongoose = require("mongoose");



const taskSchema = new mongoose.Schema({
    task:{
        name:String,
        color:String,
        status:Boolean
    }
});

module.exports = task = mongoose.model("task", taskSchema);
