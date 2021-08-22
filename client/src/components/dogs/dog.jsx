import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./dog.css"

export function Dog({name, img, temperaments, id}) {

  return (<div className="dogCard">
    
    <NavLink to={`/dog/${id}`} style={{textDecoration: 'none'}}>
    <div className="dogsBox">
      <div className="titleImgBox">
        <h3>{name}</h3>
   
      
      <div className="imgDogContainer">
        <img src={img} alt={`a ${name}`}/>
      </div>
      </div>
    
      <div className="dogTemperament">
        <div><ul><br/>{temperaments?.map(temperament =>(
          <li key={temperament}>{temperament}</li>
          ))}</ul>
        </div>
      </div>
      </div>
      
    
    </NavLink>
    
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

export default connect(mapStateToprops, mapDispatchToProps)(Dog);