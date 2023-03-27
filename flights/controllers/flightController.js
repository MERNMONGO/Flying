const {Flights, Destinations} = require("../models/flightModel");
// const Flight = require("../models/flightModel");
// const Destination = require("../models/");


module.exports.index = async (req, res) => {
    try {
      // Use the flights model to interact with the database
      // find will get all documents from the flights collection
      const flights = await Flights.find().sort({departs: 1})
      console.log(flights);
     
    
      // Looks in the views folder for "flights/Index" and passes { flights } data to the view (kind of like a server props object)
      res.render("flights/Index", { flights });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

  
  // GET /capLog/new
module.exports.new = (req, res) => {
  const newFlight = new Flights();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	console.log(departsDate)
    res.render("flights/New",{departsDate});

  };


  // POST /capLog
module.exports.create = async (req, res) => {
  
    try {
      // use the model to interact with db and create a new document in the capLog collection
      const result = await Flights.create(req.body);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  
    res.redirect("/flights");
  };

    // POST /capLog
module.exports.createDestination = async (req, res) => {
  
  try {
    // use the model to interact with db and create a new document in the capLog collection
    // const result = await Destinations.create(req.body);
    await Flights.findByIdAndUpdate(req.params.flightid,{$push:{destinations:req.body}})
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${req.params.flightid}`);
};


  // Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  console.log("is it show")

  
    try {
      const flight = await Flights.findById(req.params.id).populate("destinations");
      let airports = ['AUS', 'DAL', 'LAX', 'SAN' ]
      
     
      let newSelect = airports.filter(x=> x!==flight.airport)

      
      // console.log("here1:",)
      // console.log("here:", )
      // console.log("here2:")
    
      res.render("flights/Show", { flight,newSelect });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };