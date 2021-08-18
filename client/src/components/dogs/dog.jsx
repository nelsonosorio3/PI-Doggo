import React from 'react';
import style from "./Card.module.css";
import { NavLink } from 'react-router-dom';

export default function Dog({name, temperaments, img}) {
  
  return (<div>
    
    <NavLink to={`/dog/${name}`} style={{textDecoration: 'none'}}>
    <div className="dogBox">
      <h1>{name}</h1>
      <img src={img} alt={"dog breed image"}/>
      <div><ul>{temperaments.map(temperament =>(
        <li>{temperament}</li>
      ))}</ul></div>
    </div>
    </NavLink>
    
  </div>)
};