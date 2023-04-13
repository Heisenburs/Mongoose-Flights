//* Schema

const mongoose = require('mongoose')
//TODO: airline (enum to include american, sw, united), flight no (min 10- max 9999), depart date
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['United', 'Southwest', 'American']
    },
    flightNo: {
        type: Number,
        minLength: 10,
        maxLength: 9999
    }
},
    { timestamps: true }
)

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight;