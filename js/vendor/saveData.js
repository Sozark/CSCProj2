// Saves the data to the database

const ParkingLot = require('./models/ParkingLot'); 
const scrapeParkingData = require('./scrape'); 

async function saveToMongoDB() {
    const data = await scrapeParkingData(); 

    try {
       await ParkingLot.insertMany(data);
       console.log('Data saved successfully!'); 
    } catch (error) {
        console.error('Error saving data:', error); 

    }
    }

saveToMongoDB(); 