require('dotenv').config()

const express = require('express')
const connectToDb = require('./config/db')
//TODO: Schema
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Flights Homepage')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
    //TODO: connect to MongoDB
    connectToDb()
})

