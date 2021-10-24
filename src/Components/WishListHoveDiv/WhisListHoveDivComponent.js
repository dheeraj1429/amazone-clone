import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./WhisListHoveDivComponent.css";

function WhisListHoveDivComponent(props) {
  let totalPrice;
  if (props.data.length > 0) {
    totalPrice = props.data.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
  }

  return (
    <div>
      <div className={props.showDivData == true ? "WishListCard" : "WishListCard hideCard"}>
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
