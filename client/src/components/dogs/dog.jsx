import React from "react";
import { NavLink } from 'react-router-dom';
import "./dog.css"

export function Dog({name, img, temperaments, id, origin}) {

  return (<div className="dogCard">
    
    <NavLink to={`/dog/${id}`} style={{textDecoration: 'none'}}>
    <div className="dogsBox">
      <div className="titleImgBox">
        <h3>{name}</h3>
   
        </div>
      <div className="imgDogContainer">
        <img src={img} alt={`a ${name}`}/>
      </div>
      
      <h3>{origin}</h3>
      <div className="dogTemperament">
        <div><ul>{temperaments?.map(temperament =>(
          <li key={id++}>{temperament}</li>
          ))}</ul>
        </div>
      </div>
      </div>
      
    
    </NavLink>
    
  </div>)
};

export default Dog;