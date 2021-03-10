var hotel = require("../models/hotel");

exports.listHotels = async function (req, res) {
  var findhotel = await hotel.find();

  res.status(200);
  res.json(findhotel);
};

exports.listRooms = async function (req, res) {
  var findhotel = await hotel.findOne({
    Name: req.body.name
  });

  var rooms = findhotel.Rooms.filter(function (x) {
    return x.isBooked === false;
  });

  res.status(200);
  res.json(rooms);
};

exports.addHotel = async function (req, res) {

  var result = await hotel.create({
    Name: req.body.name
  });

  res.status(200);
  res.json(result);
};

exports.addRoom = async function (req, res) {
  var findhotel = await hotel.findOne({
    Name: req.body.name 
  });

  findhotel.Rooms.push({
    number: req.body.number,
    isBooked: req.body.isBooked
  });

  var result = await findhotel.save();

  res.status(200);
  res.json(result);
};
