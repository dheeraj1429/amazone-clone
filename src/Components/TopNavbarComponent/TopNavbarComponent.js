import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import TopNavbarSmallComponent from "../TopNavbarSmallComponent/TopNavbarSmallComponent";
import SearchComponent from "../SearchComponent/SearchComponent";

import WhisListHoveDivComponent from "../WishListHoveDiv/WhisListHoveDivComponent";

import "./TopNavbarComponent.css";

function TopNavbarComponent(props) {
  const selector = useSelector((state) => state.user.whisList);

  const [ShowWishList, setShowWishList] = useState(false);

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
        <div className="ShopDivComponent">
          <i
            class="fas fa-shopping-cart"
            onClick={() => {
              ShowWishList == false ? setShowWishList(true) : setShowWishList(false);
            }}
          ></i>
          {selector ? selector.length : 0}
          <WhisListHoveDivComponent data={selector} showDivData={ShowWishList} />
        </div>
      </div>
    </div>
  );
}

export default TopNavbarComponent;
