const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  sleep: {
    type: String,
    required: true,
  },
  meals: {
    type: String,
    required: true,
  },
  workout: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Entry", entrySchema);