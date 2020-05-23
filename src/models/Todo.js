const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("Todo", TodoSchema);
