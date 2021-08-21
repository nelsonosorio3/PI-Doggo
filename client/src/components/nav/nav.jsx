import React from "react";
import {NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";
import "./nav.css"

export function Nav() {
  return(

    <div  id="navBar">
      <div id="home">
        <NavLink activeClassName="navCurrent" to ="/home">
          <div>
          HOME
          </div>
        </NavLink>
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <NavLink activeClassName="navCurrent" to ="/addDog">
          ADD YOUR OWN
        </NavLink>
      </div>
    </div>
  )
}

export default Nav;