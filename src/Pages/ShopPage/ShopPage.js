import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removeItem } from "../../Redux/Action/action";

import { CustomButtonComponent } from "../../Components/CustomButtonComponent/CustomButtonComponent";

import "./ShopPage.css";

function ShopPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.whisList);

  let totalPrice;
  if (selector.length > 0) {
    totalPrice = selector.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
  }

  return (
    <div className="ShopPage">
      <div className="Container">
        <div className="ShopCard">
          <div className="Card">
            <h1>Shoping Cart</h1>
            <div className="ShopCardInner">
              {selector.map((el) => (
                <div className="ShopContent">
                  <div className="ShopImgDiv">
                    <img src={el.posterUrl} />
                  </div>
                  <div className="SHopContentDiv">
                    <h1>{el.Discription}</h1>
                    <p className="inStock">In stock</p>
                    <p>Eligible for FREE Shipping</p>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />
                    <div className="QytDiv">
                      <p onClick={() => dispatch(removeItem(el.id))}>Delete</p>
                      <p>Qty: {el.quntity}</p>
                    </div>
                  </div>
                  <div className="SHopPriceDiv">
                    <h3>₹{el.Deal_of_the_Day}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTotalDiv">
              <h2>
                {selector.length > 0 ? (
                  <>
                    <div>
                      Subtotal ({selector.length} item): ₹ {totalPrice}
                    </div>
                    <CustomButtonComponent data={"Buy Now"} />
                  </>
                ) : (
                  <div>Empty ({selector.length} item)</div>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
