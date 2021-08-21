import React from "react";
import Pagination from "./pagination.jsx";
import "./bottomBar.css"

export function BottomBar() {
  return(

    <div id="bottomBar">
      <div>
        <button className="bottombuttons">First Page</button>
      </div>
      <div>
      <button className="bottombuttons">Previous Page</button>
      </div>
      <div>
        <Pagination/>
      </div>
      <div>
      <button className="bottombuttons">Next Page</button>
      </div>
      <div>
      <button className="bottombuttons">Last Page</button>
      </div>
      
    </div>
  )
}

export default BottomBar;