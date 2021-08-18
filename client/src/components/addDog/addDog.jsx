import React from "react";
import { useState } from "react";
import {connect} from "react-redux";
import {addBreed} from "../../actions"
import "./addDog.css";

export function AddDog(breed) {
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    temperaments: "",
  });

  const handleInputChange = function(event){
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event =>{
    event.preventDefault();
    breed.addBreed(input);
  };

  return(

    <div id="formContainer">
      <div id="circle">
      <form>
        <label for="name">Name of the breed:</label>
        <input type="text" name="name" placeholder="Siberian Husky"/><br/>

        <label for="minHeight">Min Height in cm:</label>
        <input type="number" name="minHeight" placeholder="52" min="0"/>
        <label for="maxHeight">Max Height in cm:</label>
        <input type="number" name="maxHeight" placeholder="59" min="0"/><br/>

        <label for="minWeight">Min Weight in Kg:</label>
        <input type="number" name="minWeight" placeholder="90" min="0"/>
        <label for="maxWeight">Max Weight in Kg:</label>
        <input type="number" name="maxWeight" placeholder="120" min="0"/><br/>

        <label for="minLife_span">Max Lifespan in years:</label>
        <input type="text" name="minLife_span" placeholder="12" min="0"/>
        <label for="maxLife_span">Max Lifespan in years:</label>
        <input type="text" name="maxLife_span" placeholder="14" min="0"/><br/>

        <label for="temperament">Temperaments list:</label>
        <input type="text" name="temeprament" placeholder="Athletic, Playful, Good-natured"/><br></br>
        <input type="submit" value="Submit"/>
      </form>
      </div>
      <div id="nostrilL"></div>
      <div id="nostrilR"></div>
      
    </div>
  )
}

function mapStateToprops(state){
  return{
    breed: state,
  };
};

function mapDispatchToProps(dispatch){
  return{
    addBreed: breed => dispatch(addBreed(breed))
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(AddDog);