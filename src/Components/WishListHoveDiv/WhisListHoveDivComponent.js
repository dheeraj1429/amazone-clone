import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./WhisListHoveDivComponent.css";

function WhisListHoveDivComponent(props) {
  const [FullSideBar, setFullSideBar] = useState(false);
  let totalPrice;
  if (props.data.length > 0) {
    totalPrice = props.data.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
  }

  window.addEventListener("scroll", function () {
    if (this.scrollY > 50) {
      setFullSideBar(true);
    }
    if (this.scrollY < 30) {
      setFullSideBar(false);
    }
  });

  return (
    <div>
      <div
        className={props.showDivData == true ? "WishListCard" : "WishListCard hideCard"}
        style={{
          top: FullSideBar == true ? "0" : "50px",
        }}
      >
        <div className="WishListContent">
          <h3>{props.data == 0 ? "Empty" : "Subtitle"}</h3>
          <p>{props.data.length > 0 ? `₹ ${totalPrice}` : ""}</p>
          <Link to="/Shop">
            <h3 className="Shop">Shop</h3>
          </Link>

          {props.data.map((el) => (
            <div className="ProductCoverDiv">
              <div className="ProductsImgDiv">
                <div className="quntityDiv">
                  <p>{el.quntity}</p>
                </div>
                <img src={el.posterUrl} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhisListHoveDivComponent;
