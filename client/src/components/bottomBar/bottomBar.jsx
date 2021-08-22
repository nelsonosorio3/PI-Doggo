import React, {useState, useEffect} from "react";
import Pagination from "./pagination.jsx";
import { connect } from "react-redux";
import "./bottomBar.css"

export function BottomBar(breed) {
  return(

    <div id="bottomBar">
      {
        breed.breed.results.length? <Pagination/>: <div></div>
      }
      {/* <Pagination/> */}
    
    </div>
  )
}

function mapStateToprops(state){
  return{
    breed: state
  };
};



export default connect(mapStateToprops)(BottomBar);