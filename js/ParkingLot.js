const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  lotName: String,
  availability: String,
  day: String,
});

const ParkingLot = mongoose.model('ParkingLot', parkingSchema);

module.exports = ParkingLot;
