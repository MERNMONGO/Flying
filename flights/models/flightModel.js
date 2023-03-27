const mongoose = require('mongoose')

const Schema = mongoose.Schema

//take the current date , plus 1 year in milliseconds -- (1000*60*60*24*365)
let nextyearDate = Date.now() +(1000*60*60*24*365);
//format it and place it in a new variable
let nextyearDateFormat = new Date(nextyearDate).toDateString();

const destinationSchema = new Schema({
    airport: { type: String, enum:['AUS', 'DAL', 'LAX', 'SAN' 	] },
    arrival: { type: Date},
    destination:{type:String}
 })

const flightSchema = new Schema({
    airline: {type: String, enum:['American','Southwest','United']},
    flightNo: {type: Number, required: 10<=9999},
    departs: {type: Date, default:nextyearDateFormat},
    airport: {type: String, enum:['AUS', 'DAL', 'LAX', 'SAN' 	], default: 'SAN'},
    destinations: [destinationSchema]
})

const Flights = mongoose.model('flights', flightSchema)
const Destinations = mongoose.model('destinations', destinationSchema)
module.exports = {Flights, Destinations}