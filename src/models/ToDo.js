const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  content: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model("Todo", TodoSchema);
