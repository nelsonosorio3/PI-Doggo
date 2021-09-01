import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import { getDetails } from "../../actions";
import "./dogDetails.css";

export function DogDetails(breed) {
  const {id} = useParams();
  // console.log(id);
  // breed.getDetails(id);
  const details = () =>{
    breed.getDetails(id);}

  useEffect(() => {
    details()
  },[id]);
  return(

    <div id="detailsContainer">
      <div id="detailsBox">
        <h2>{breed.breed.name}</h2>
        <div id="detailsBreed">
          <div id="imgContainer">
            <img src={breed.breed.img} alt={`a ${breed.breed.name}`}/>
          </div>
          <div id="detailsNumbers">
            <div id="numbers">
              <div>Height:<br/>  {breed.breed.height} cm </div><br/>
              <div>Weight:<br/>  {breed.breed.weight} kg</div><br/>
              <div>Lifespan:<br/>  {breed.breed.life_span}</div><br/>
              <div>Origin: {breed.breed.origin}</div>
            </div><br/>
            
            <div>Temperaments:</div><br/><div>{breed.breed.temperaments}</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

function mapStateToprops(state){
  return{
    breed: state.breedDetails
  };
};

function mapDispatchToProps(dispatch){
  return{
    getDetails: id => dispatch(getDetails(id))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(DogDetails);