import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./searchBar.css"
import { loadResults } from "../../actions";

export function SearchBar() {

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

  const [display, setDisplay] = useState({advance: false, order:false});

  const showAdvance = function(){
    let temp;
    if(display.order && !display.advance) temp = false;
    setDisplay({...display, advance: display.advance ? false : true, order: temp});
  };

  const showOrder = function(){
    let temp;
    if(display.order && !display.advance) temp = false;
    setDisplay({...display, order: display.order ? false : true, advance: temp})
  }
  

  // const handleSubmit = event =>{
  //   event.preventDefault();
  //   breed.addBreed(input);
  // };
    
  
  return(
    <div>
      <div id="searchBarContainer">
        <form>
        <input type="text" name ="searchBar" placeholder="Search for a specific breed..." id="searchBar"/>
          <Link to ="/home">
            <button id="searchButton">🔎</button>
          </Link>
          <div id="advanceBox" style={{ display: display.advance ? "flex" : "none" }}>
            <label for="temperament">Temperament: </label>
            <input type="text" name="temperament" placeholder="playful"/><br/>
            <label for="database">From database</label>
            <input type="checkbox" name="database" checked/><br/>
            <label for="userAdded">From user</label>
            <input type="checkbox" name="userAdded" checked/>
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
        <button id="orderButton" onClick={showOrder}>Order Search</button>
        </div>
      </div>
      
    </div>
  )
}

export default SearchBar;