import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import "./nav.css"

export function Nav() {
  return(

    <div  id="navBar">
      <div id="home">
        <Link to ="/home">
          HOME
        </Link>
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Link to ="/addDog">
          ADD YOUR OWN
        </Link>
      </div>
    </div>
  )
}

export default Nav;