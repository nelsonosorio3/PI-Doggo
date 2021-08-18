import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./searchBar.css"
import { loadResults, filterTemperament } from "../../actions";
import { connect } from "react-redux";

export function SearchBar(breed) {

  const [input, setInput] = useState({
    name: "",
    minHeight: "0",
    maxHeight: "999",
    minWeight: "0",
    maxWeight: "999",
    minLife_span: "0",
    maxLife_span: "999",
    temperament: "",
    database: true,
    userAdded: true,
  });

  const [display, setDisplay] = useState({advance: false, order:false});

  const showAdvance = function(){
    setDisplay({advance: display.advance ? false : true, order: false});
  };

  const showOrder = function(){
    setDisplay({order: display.order ? false : true, advance: false})
  }
  

  const handleInputChange = function(event){
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    
  };

  const handleCheckBoxChangeDataBase = function(event){
    setInput({
      ...input,
      database: !input.database
    })
  }
  const handleCheckBoxChangeUserAdded = function(event){
    setInput({
      ...input,
      userAdded: !input.userAdded
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
    breed.loadResults(input);
    breed.filterTemperament(input);
  };
    
  useEffect(()=>{

  });
  return(
    <div>
      <div id="searchBarContainer">
        <form onSubmit={handleSubmit}>
        <input type="text" name ="name" placeholder="Search for a specific breed..." id="searchBar"  onChange={handleInputChange}/>
          <Link to ="/home">
            <button id="searchButton" onClick={handleSubmit}>🔎</button>
          </Link>
          <div id="advanceBox" style={{ display: display.advance ? "flex" : "none" }}>
            <label for="temperament">Temperament: </label>
            <input type="text" name="temperament" placeholder="playful" onChange={handleInputChange}/><br/>
            <label for="database">From database</label>
            <input type="checkbox" name="database" checked={input.database} onChange={handleCheckBoxChangeDataBase}/><br/>
            <label for="userAdded">From user</label>
            <input type="checkbox" name="userAdded" checked={input.userAdded} onChange={handleCheckBoxChangeUserAdded}/>
          </div>
          </form>
          <div id="orderBox" style={{display: display.order ? "flex": "none"}}>
            <button className="oderButtons">Alphabetically [A-Z]</button>
            <button className="oderButtons">Alphabetically [Z-A]</button>
            <button className="oderButtons">Weigth ascending</button>
            <button className="oderButtons">Weigth descending</button>
          </div>
          
      </div >
      <div id="searchOptions">
        <div>
        <button id="advanceButton" onClick={showAdvance}>Advanced Search</button>
        </div>
        <div>
        <button id="orderButton"  onClick={showOrder}>Order Search</button>
        </div>
      </div>
      
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
    loadResults: breed => dispatch(loadResults(breed)),
    filterTemperament: breed => dispatch(filterTemperament(breed))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);
