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

app.get('/testflight', (req, res) => {
    const firstFlight = {
    airline: "American",
    flightNo: 948568,
    departs: Date,

}

    Flight.create(firstFlight)
        .then(flight => {
            res.send(flight)
            console.log('flight created')
        })
        .catch((error) => {
            console.error(error)
        })

})



app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
    //TODO: connect to MongoDB
    connectToDb()
})

