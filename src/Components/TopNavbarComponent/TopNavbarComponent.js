import React from "react";

import TopNavbarSmallComponent from "../TopNavbarSmallComponent/TopNavbarSmallComponent";
import SearchComponent from "../SearchComponent/SearchComponent";

import "./TopNavbarComponent.css";

function TopNavbarComponent() {
  return (
    <div className="TopNavbar">
      <div className="NavbarDivFirst">
        <img src="./Images/on.PNG" />
        <TopNavbarSmallComponent title={"Hello"} subtitle={"Select your address"} />
      </div>
      <div className="NavbarDivSecond">
        <SearchComponent />
      </div>
      <div className="NavbarDivThree">
        <TopNavbarSmallComponent title={"Hello, Sign in"} subtitle={"Account & Lists"} />
        <TopNavbarSmallComponent title={"Return"} subtitle={"& Orders"} />
        <div>
          <i class="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default TopNavbarComponent;
