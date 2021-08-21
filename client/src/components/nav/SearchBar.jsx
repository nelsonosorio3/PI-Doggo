import React, {useState, useEffect} from "react";
import "./searchBar.css"
import { loadResults, 
          filterTemperament,
          filterApi,
          filterUser,
          orderAlphaAsc, 
          orderAlphaDesc, 
          orderMinToMaxWeight,
          orderMaxToMinWeight} from "../../actions";
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

  const handleOrderAlphaAsc = function(){
    breed.orderAlphaAsc()
  }

  const handleOrderAlphaDesc = function(){
    breed.orderAlphaDesc()
  }
  const handleOrderWeightAsc = function(){
    breed.orderMinToMaxWeight()
  }
  const handleOrderWeightDesc = function(){
    breed.orderMaxToMinWeight()
  }

  const handleSubmit =  event =>{
    event.preventDefault();
    breed.loadResults(input);
    breed.filterTemperament(input);
    breed.filterApi(input);
    breed.filterUser(input);
    
  };

  
    
  useEffect(()=>{

  });
  return(
    <div>
      <div id="searchBarContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name ="name" placeholder="Search for a specific breed..." id="searchBar"  onChange={handleInputChange}/>
            {/* <Link to ="/home"> */}
              <button type="submit" id="searchButton">🔎</button>
            {/* </Link> */}
            <div id="advanceBox" style={{ display: display.advance ? "flex" : "none" }}>
              <label htmlFor="temperament">Temperament: </label>
              <input type="text" name="temperament" placeholder="playful" onChange={handleInputChange}/><br/>
              <label htmlFor="database">From database</label>
              <input type="checkbox" name="database" checked={input.database} onChange={handleCheckBoxChangeDataBase}/><br/>
              <label htmlFor="userAdded">From user</label>
              <input type="checkbox" name="userAdded" checked={input.userAdded} onChange={handleCheckBoxChangeUserAdded}/>
            </div>
          </form>
          <div id="orderBox" style={{display: display.order ? "flex": "none"}}>
            <button className="oderButtons" onClick={handleOrderAlphaAsc}>Alphabetically [A-Z]</button>
            <button className="oderButtons" onClick={handleOrderAlphaDesc}>Alphabetically [Z-A]</button>
            <button className="oderButtons" onClick={handleOrderWeightAsc}>Weigth ascending</button>
            <button className="oderButtons" onClick={handleOrderWeightDesc}>Weigth descending</button>
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
    filterTemperament: breed => dispatch(filterTemperament(breed)),
    filterApi: breed => dispatch(filterApi(breed)),
    filterUser: breed => dispatch(filterUser(breed)),
    orderAlphaAsc: () => dispatch(orderAlphaAsc()),
    orderAlphaDesc: () => dispatch(orderAlphaDesc()),
    orderMinToMaxWeight: () => dispatch(orderMinToMaxWeight()),
    orderMaxToMinWeight: () => dispatch(orderMaxToMinWeight()),

  };
};

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);
