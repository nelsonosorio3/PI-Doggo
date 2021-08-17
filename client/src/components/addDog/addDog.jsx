import React from "react";
import "./addDog.css";

export function AddDog() {
  return(

    <div id="formContainer">
      <div id="circle">
      <form>
        <label for="name">Name of the breed:</label>
        <input type="text" name="name" placeholder="Siberian Husky"/><br/>

        <label for="minHeight">Min Height in cm:</label>
        <input type="number" name="minHeight" placeholder="52"/>
        <label for="maxHeight">Max Height in cm:</label>
        <input type="number" name="maxHeight" placeholder="59"/><br/>

        <label for="minWeight">Min Weight in Kg:</label>
        <input type="number" name="minWeight" placeholder="90"/>
        <label for="maxWeight">Max Weight in Kg:</label>
        <input type="number" name="maxWeight" placeholder="120"/><br/>

        <label for="minLife_span">Max Lifespan in years:</label>
        <input type="text" name="minLife_span" placeholder="12"/>
        <label for="maxLife_span">Max Lifespan in years:</label>
        <input type="text" name="maxLife_span" placeholder="14"/><br/>

        <label for="img">Image URL:</label>
        <input type="text" name="img" placeholder="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26155623/Siberian-Husky-standing-outdoors-in-the-winter.jpg"/><br></br>
        <input type="submit" value="Submit"/>
      </form>
      </div>
      <div id="nostrilL"></div>
      <div id="nostrilR"></div>
      
    </div>
  )
}

export default AddDog;