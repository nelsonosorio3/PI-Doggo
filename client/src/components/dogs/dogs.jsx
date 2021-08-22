import React from "react";
import { connect } from "react-redux";
import Dog from "./dog";
import "./dogs.css";

export function Dogs(breed) {
 
  return (<div>
    
  
    <div id="dogsBox">
      {breed.breed.currentPageResults.map(dog =>(
        <Dog 
        name = {dog.name}
        img = {dog.img}
        temperaments = {dog.temperaments?.split(", ")}
        id = {dog.id}
        key = {dog.id}/>
      ))
      }
      
    </div>
    
  </div>)
};

function mapStateToprops(state){
  return{
    breed: state
  };
};

function mapDispatchToProps(dispatch){
  return{
    
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Dogs);