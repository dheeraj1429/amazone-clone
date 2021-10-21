import React from "react";

import { useDispatch } from "react-redux";

import { removeItem } from "../../Redux/Action/action";

import "./WhisListHoveDivComponent.css";

function WhisListHoveDivComponent(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={props.showDivData == true ? "WishListCard" : "WishListCard hideCard"}>
        {props.data.map((el) => (
          <div className="wishListDivCardSm">
            <div
              className="ProductsImgDiv"
              style={{
                backgroundImage: `url(${el.posterUrl})`,
              }}
            ></div>
            <div className="producstsContentDiv">
              <h3>{el.shortTitle}</h3>
              <h4 className="Price">{el.Deal_of_the_Day}</h4>

              <button type="button" className="removeItemButton" onClick={() => dispatch(removeItem(el.id))}>
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhisListHoveDivComponent;
