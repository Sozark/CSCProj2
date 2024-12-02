
//This is to test code the MongoDB data will be inserted here when ready. 

const express = require('express');
const app = express();

// Mock data (for testing without MongoDB)
const parkingLots = [
  { lotName: 'Lot A', availability: '50%', day: 'Monday' },
  { lotName: 'Lot B', availability: '70%', day: 'Tuesday' },
];

// Serve static files (like availability.html)
app.use(express.static('public'));

// REST API endpoint for availability
app.get('/api/availability', (req, res) => {
  res.json(parkingLots); // Send mock data as JSON
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
