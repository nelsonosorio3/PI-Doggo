import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import { getDetails } from "../../actions";
import "./dogDetails.css";

export function DogDetails(breed) {
  const {id} = useParams();
  // console.log(id);
  // breed.getDetails(id);
  console.log(breed.breed.name)
  const test = () =>{
    breed.getDetails(id);}

  useEffect(() => {
    test()
  },[id]);
  return(

    <div>
      <div id="detailsContainer">
        <h2>{breed.breed.name}</h2>
        <div id="detailsBreed">
          <img src={breed.breed.img} alt={`a ${breed.breed.name}`}/>
          <div id="detailsNumbers">
            <div>{breed.breed.height}</div>
            <div>{breed.breed.weight}</div>
            <div>{breed.breed.life_span}</div>
            <div>{breed.breed.temperaments}</div>
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