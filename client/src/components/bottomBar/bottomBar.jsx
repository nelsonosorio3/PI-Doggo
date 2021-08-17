import React from "react";
import {Link} from "react-router-dom";
import Pagination from "./pagination.jsx";
import "./bottomBar.css"

export function BottomBar() {
  return(

    <div id="bottomBar">
      <div>
        <button class="bottombuttons">First Page</button>
      </div>
      <div>
      <button class="bottombuttons">Previous Page</button>
      </div>
      <div>
        <Pagination/>
      </div>
      <div>
      <button class="bottombuttons">Next Page</button>
      </div>
      <div>
      <button class="bottombuttons">Last Page</button>
      </div>
      
    </div>
  )
}

export default BottomBar;