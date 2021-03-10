const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  number: Number,
  isBooked: Boolean,
});

const room = mongoose.model("Room", schema);

room.createIndexes();

module.exports = schema;
