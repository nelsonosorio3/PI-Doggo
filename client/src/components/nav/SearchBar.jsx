import React from "react";
import {Link} from "react-router-dom";
import "./searchBar.css"

export function SearchBar() {
  return(
    <div>
      <div id="searchBarContainer">
          <input type="text" placeholder="Search for a specific breed..." id="searchBar"></input>
          <Link to ="/home">
            <button id="searchButton">🔎</button>
          </Link>
      </div >
      <div id="searchOptions">
        <div>
        <button id="advanceButton">Advanced Search</button>
        </div>
        <div>
        <button id="filterButton">Filter Search</button>

        </div>
      </div>
      
    </div>
  )
}

export default SearchBar;