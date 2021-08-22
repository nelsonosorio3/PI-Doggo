import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { goN } from "../../actions";
import "./pagination.css";

export function Pagination(breed) {
  const [currentPage, setCurrentPage] = useState(1);

  const amountPages = Math.ceil(breed.breed.results.length/8) || 1;
  const pageNumbers = [];

  for (let i = 0; i < amountPages; i++) {
    pageNumbers.push(i+1);
  };

  const handleClick = function(number){
    setCurrentPage(number);
    breed.goN(number);
  };

  
  for (let i = 0; i < amountPages; i++) {
    if(i+2< currentPage) pageNumbers.shift()
    else if(i-3> currentPage ) pageNumbers.pop();
  };

  

  // const listPageNumber = pageNumbers.map(number => <li onClick={()=> setCurrentPage(number) }>{number}</li> )
  const listPageNumber = pageNumbers.map(number => <li onClick={() => handleClick(number)} key={number}>{number}</li> )
  useEffect(()=>{
  
  });
  return(

    <div id="pagination">
      <div>
        <button className="bottombuttons" onClick={() => handleClick(1)}>First Page</button>
      </div>
      <div>
      <button className="bottombuttons" onClick={() => handleClick(currentPage-1 > 1? currentPage-1 : 1)}>Previous Page</button>
      </div>
      <div>
      <ul>{listPageNumber}</ul>
      </div>
      <div>
      <button className="bottombuttons"  onClick={() => handleClick(currentPage+1 <amountPages? currentPage+1 : amountPages)}>Next Page</button>
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

export default connect(mapStateToprops, mapDispatchToProps)(Pagination);