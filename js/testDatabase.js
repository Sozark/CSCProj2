// Import the database connection
const mongoose = require('./js/database');
console.log('Database module loaded successfully.');

// Import the ParkingLot model
const ParkingLot = require('./models/ParkingLot');
console.log('ParkingLot model loaded successfully.');

async function testDatabase() {
  try {
    console.log('Starting the testDatabase function...');

    // Insert a new parking lot
    const lot = new ParkingLot({ lotName: "Test Lot", availability: "50%", day: "Monday" });
    await lot.save();
    console.log('Data saved successfully:', lot);

    // Query the parking lot data
    const lots = await ParkingLot.find();
    console.log('Retrieved lots:', lots);
  } catch (error) {
    console.error('Error during testDatabase execution:', error);
  } finally {
    console.log('Closing the MongoDB connection...');
    mongoose.connection.close();
  }
}

testDatabase();

console.log('Test script is starting...');
