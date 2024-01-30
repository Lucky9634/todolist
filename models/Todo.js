const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   text : String,
   select: String,
   date : String,
});

module.exports = new mongoose.model("todos", todoSchema);