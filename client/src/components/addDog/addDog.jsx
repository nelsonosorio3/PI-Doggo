import React, { useEffect } from "react";
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

  useEffect(()=>{
  
  }, [breed]);
  return(

    <div id="formContainer">
      <div id="circle">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the breed:</label>
        <input type="text" name="name" placeholder="Siberian Husky" onChange={handleInputChange}/><br/>

        <label htmlFor="minHeight">Min Height in cm:</label>
        <input type="number" name="minHeight" placeholder="52" min="0" onChange={handleInputChange}/>
        <label htmlFor="maxHeight">Max Height in cm:</label>
        <input type="number" name="maxHeight" placeholder="59" min="0" onChange={handleInputChange}/><br/>

        <label htmlFor="minWeight">Min Weight in Kg:</label>
        <input type="number" name="minWeight" placeholder="90" min="0" onChange={handleInputChange}/>
        <label htmlFor="maxWeight">Max Weight in Kg:</label>
        <input type="number" name="maxWeight" placeholder="120" min="0" onChange={handleInputChange}/><br/>

        <label htmlFor="minLife_span">Min Lifespan in years:</label>
        <input type="number" name="minLife_span" placeholder="12" min="0" onChange={handleInputChange}/>
        <label htmlFor="maxLife_span">Max Lifespan in years:</label>
        <input type="number" name="maxLife_span" placeholder="14" min="0" onChange={handleInputChange}/><br/>

        <label htmlFor="temperament">Temperaments list:</label>
        <input type="text" name="temperament" placeholder="athletic, playful, loyal" onChange={handleInputChange}/><br/>
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
    breed: state
  };
};

function mapDispatchToProps(dispatch){
  return{
    addBreed: breed => dispatch(addBreed(breed))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(AddDog);