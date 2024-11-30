//This is to setup for the MongoDB

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/parking', { 
     useNewUrlParser: true,
     useUnifiedTopology: true,  
 });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error')); 
db.once('open', () => {
    console.log('Cononected to MongoDB'); 
});

module.exports = mongoose; 

//This section is the creation of a schema for the data 

const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    lotName: String, 
    availablility: String, 
    day: String, 
}); 

const ParkingLot = mongoose.model('ParkingLot', parkingSchema); 

module.exports = ParkingLot; 
