import React from "react";
import { Link } from "react-router-dom";

import TopNavbarSmallComponent from "../TopNavbarSmallComponent/TopNavbarSmallComponent";
import SearchComponent from "../SearchComponent/SearchComponent";

import { auth } from "../Firebase/Firebase.utili";

import "./TopNavbarComponent.css";

function TopNavbarComponent(props) {
  let shortUerName;
  if (props.userData !== null) {
    const { displayName } = props.userData;
    shortUerName = displayName.split(" ")[0];
  }

  return (
    <div className="TopNavbar">
      <div className="NavbarDivFirst">
        <Link to="/">
          <img src="./Images/on.PNG" />
        </Link>
        <TopNavbarSmallComponent
          title={props.userData !== null ? `Hello! ${shortUerName}` : "Hello"}
          subtitle={"Select your address"}
          shortName={shortUerName}
        />
      </div>
      <div className="NavbarDivSecond">
        <SearchComponent />
      </div>
      <div className="NavbarDivThree">
        <TopNavbarSmallComponent title={shortUerName ? "Log Out" : "Hello, Sign In"} subtitle={"Account & Lists"} />
        <TopNavbarSmallComponent title={"Return"} subtitle={"& Orders"} />
        <div>
          <Link to="/Shop">
            <i class="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbarComponent;
