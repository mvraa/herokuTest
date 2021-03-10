var room = require("./room");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  Name: String,
  Rooms: [room]
});

const Hotel = mongoose.model("Hotel", schema);

Hotel.createIndexes();

module.exports = Hotel;
