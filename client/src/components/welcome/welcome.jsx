import React from "react";
import {Link} from "react-router-dom";
import "./welcome.css"

export function Welcome() {
  return(
    <div>
      {/* <Link to="/home"> */}
        <img id="welcome" src={process.env.PUBLIC_URL + '/welcome.png'} alt="Landing page pixel dogs"/>
      {/* </Link> */}
      <Link to="/home">
        <button id="welcomeButton">Enter</button>
      </Link>
    </div>
  )
}

export default Welcome;