import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

export function Dog({name, img, temperaments}) {

  return (<div>
    
    <NavLink to={`/dog/${name}`} style={{textDecoration: 'none'}}>
    <div className="dogBox">
      <h1>{name}</h1>
      <img src={img} alt={`a ${name}`}/>
      <div><ul>{temperaments?.map(temperament =>(
        <li key={temperament}>{temperament}</li>
      ))}</ul></div>
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