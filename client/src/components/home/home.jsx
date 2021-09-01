import React from "react";
import "./home.css";
import Dogs from "../dogs/dogs";

export function Home() {
  return(
    <div>
      {/* <div id="advanceSearchBox"></div>
      <div id="filterBox"></div> */}
      <div id="homeContainer">
        <Dogs/>
      </div>
    </div>
  )
}

export default Home;