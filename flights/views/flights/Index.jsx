import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';


function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    
    return (
<DefaultLayout>
    <ul>
     
      
        {props.flights.map((flight, index) => (
        <div className = "first">
            <li
             
            >
             
                <br/>
                <strong> <h2 style = {{color:"blue"}}>Airline:</h2> {flight.airline}</strong>
                <div></div>
                <strong> <h2 style = {{color:"purple"}}>Flight No:</h2> {flight.flightNo}</strong>  <a href={`/flights/${flight._id}`}> Details on Flight  </a>
                
                <br />
               
                <strong> <h2 style = {{color:"gray"}}>Date Departing:</h2> <h3 style = {{backgroundColor: flight.departs<Date.now() ? "red":"green"}}>{flight.departs.toString()}</h3></strong>
                <br/>


                <strong> <h2 style = {{color:"orange"}}>Departure Airport:</h2> {flight.airport}</strong>
                <br/>
               
             
            </li>
        </div>
        ))}
      </ul>
</DefaultLayout>  
     
    )
}

export default Index