const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  noParticipant: {
    type: String,
    required: true,
  },
  name1: {
    type: String,
    required: true,
  },
  name2: {
    type: String,
  },
  clgname: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

mongoose.model("Students", studentsSchema);
