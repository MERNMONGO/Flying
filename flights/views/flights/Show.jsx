import React from "react";

import DefaultLayout from '../layouts/DefaultLayout';

async function handleSubmit(e) {
  e.preventDefault()

  let updatedComment = {
      body: bodyRef.current.value
  }
  

  await updateCommentOfIdFromPost(updatedComment, params.cid, params.id)
  navigate(`/posts/${params.id}`)
}

function Show(props) {
  console.log(props)
  return (
    
    <DefaultLayout>
         <form action={`/flights/${props.flight._id}`} method="POST">
         <div className = "gry">
              <h3>Airline: {props.flight.airline}</h3>
              <h3>FlightNo: {props.flight.flightNo}</h3>
              <h3>Departure Date {props.flight.departs.toString()}</h3>
              <h3>Departure Airport: {props.flight.airport}</h3>
              <br />
          </div>
  {props.flight.destinations.map((item)=>(<div className= "arrival">
              <h1>Arrival Airport: </h1><h2>{item.airport}</h2>
              
              <h1>Destination</h1><h2>{item.destination}</h2>
              
              <h1>Date-Time of Arrival:</h1><h2>{item.arrival.toISOString().slice(0, 16).replace('T', ' ')}</h2>

              
              
              </div>)) }
              <label htmlFor="tsaz">Destination:</label>
              <br />
              <input type="string" id="tsaz" name="destination"  />
              <br />
              <br />

              <label for="airports">Choose an Arrival Airport:
              (Note: It cannot be the same as your departure airport)</label>
              
            <select name="airport" id="airports">
             
            <option value={props.newSelect[0]}>Airport: {props.newSelect[0]}</option>
            <option value={props.newSelect[1]}>Airport: {props.newSelect[1]}</option>
            <option value={props.newSelect[2]}>Airport: {props.newSelect[2]}</option>
            </select>

              <br />
              <br />

              <label htmlFor="tssz">Arrival Date:</label>
              <br />
              <input type="datetime-local" id="tssz" name="arrival"  />
              <br />
              <br />
              <button>Submit</button>
      </form>

      
    </DefaultLayout>
    
  );
}

export default Show;