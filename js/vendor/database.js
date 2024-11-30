//This is to setup for the MongoDB

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/parking', { useNewUrlParser: true, useUnifiedTopology: true });

const parking
