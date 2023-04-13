require('dotenv').config()

const express = require('express')
const connectToDb = require('./config/db')
//TODO: Schema
const Flight = require('./models/Flight')
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Flights Homepage')
})

app.get('/flightsindex', (req, res) => {
    // res.send()
    console.log('Flight Index')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
    //TODO: connect to MongoDB
    connectToDb()
})

