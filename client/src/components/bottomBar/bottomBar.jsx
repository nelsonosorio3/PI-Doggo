import React, {useState, useEffect} from "react";
import Pagination from "./pagination.jsx";
import { connect } from "react-redux";
import { goN } from "../../actions";
import "./bottomBar.css"

export function BottomBar(breed) {

  const amountPages = Math.ceil(breed.breed.results.length/8) || 1;
  const handleClick = function(number){
    // setCurrentPage(number)
    breed.goN(number);
  };

  useEffect(()=>{
  
  });
  return(

    <div id="bottomBar">
      <div>
        <button className="bottombuttons" onClick={() => handleClick(1)}>First Page</button>
      </div>
      <div>
      {/* <button className="bottombuttons" onClick={() => handleClick(currentPage-1)}>Previous Page</button> */}
      </div>
      <div>
        <Pagination/>
      </div>
      <div>
      {/* <button className="bottombuttons"  onClick={() => handleClick(currentPage+1)}>Next Page</button> */}
      </div>
      <div>
      <button className="bottombuttons" onClick={() => handleClick(amountPages)}>Last Page </button>
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
    goN: breed => dispatch(goN(breed))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(BottomBar);