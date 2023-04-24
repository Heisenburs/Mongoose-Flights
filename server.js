require('dotenv').config()

const express = require('express')
const connectToDb = require('./config/db')
//TODO: Schema
const Flight = require('./models/Flight')
const app = express();
const PORT = 5000;
// const Index = require('./views/flights/Index')

app.get('/', (req, res) => {
    res.send('Flights Homepage')
})

app.get('/flights', (req, res) => {
    // res.send()
    res.render('Index', {flights: flights})
})

app.get('/testflight', (req, res) => {
    const firstFlight = {
        airline: "American",
        flightNo: 948568,

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


app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
    //TODO: connect to MongoDB
    connectToDb()
})

