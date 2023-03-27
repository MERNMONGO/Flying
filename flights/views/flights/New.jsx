import React from "react";

import DefaultLayout from '../layouts/DefaultLayout';
function New(props) {
  const date = new Date();
//   let selectobject = document.getElementById("airports");
//   for (let i=0; i<selectobject.length; i++) {
//     if (selectobject.options[i].value == airport)
//         selectobject.remove(i);
// }

  return (
    <DefaultLayout>
      <h1>New <a href = "/flights">Add Flight</a></h1>
      <form action="/flights" method="POST">
        <label htmlFor="ttl">Airline:</label>
        <br />
        <input type="text" id="ttl" name="airline" />
        <br />
        <br />

        <label htmlFor="nom">Flight No:</label>
        <br />
        <input type="text" id="nom" name="flightNo" />
        <br />
        <br />

        <label htmlFor="ts">Departs:</label>
        <br />
        <input type="datetime-local" id="ts" name="departs" defaultValue={props.departsDate.toString()} />
        <br />
        <br />
       
            <label for="airports">Choose a Airport:</label>
            <select name="airport" id="airports">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN" selected >SAN</option>
            </select>

       
        <button>Submit</button>
      </form>
    </DefaultLayout>
  );
}

export default New;




