const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    when: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('ToDo', toDoSchema);
