import React from 'react';
import style from "./Card.module.css";

export default function Dog({name, temperaments, img}) {
  
  return (<div>
    
  
    <div className="dogsBox">
      <h1>{name}</h1>
      <img src={img} alt={"dog breed image"}/>
      <div><ul>{temperaments.map(temperament =>(
        <li>{temperament}</li>
      ))}</ul></div>
    </div>
    
  </div>)
};