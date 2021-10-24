import React, { useState } from "react";

import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Redux/Action/action";

import { removeAllItem, cloneAllItem } from "../../Redux/Action/action";

import "./ShopPage.css";
import { Link } from "react-router-dom";

function ShopPage() {
  const dispatch = useDispatch();
  const [ShowPurchasingItemData, setShowPurchasingItemData] = useState(false);
  const [userData, SetuserData] = useState({
    data: [],
  });
  const selector = useSelector((state) => state.user.whisList);

  let totalPrice;
  if (selector.length > 0) {
    totalPrice = selector.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
  }

  const TokenHandler = (token, addresses) => {
    if ((token, addresses)) {
      setShowPurchasingItemData(true);
      dispatch(cloneAllItem(selector));
      dispatch(removeAllItem());
      SetuserData({ data: addresses });
    }
  };

  return (
    <div className="ShopPage">
      <div className="Container">
        {ShowPurchasingItemData == true ? (
          <div className="ThankuDiv">
            <img
              src="https://artofselfdiscovery.com.au/wp-content/uploads/2020/04/thankyou-gif.gif"
              style={{
                width: "100px",
              }}
            />
            <h1>You successfully create your booking</h1>
            <p>
              Go to your order page{" "}
              <Link to="/Orders">
                <span>Click here</span>
              </Link>
            </p>
          </div>
        ) : (
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
                      <h5>
                        Name: <span>{el.shortTitle}</span>
                      </h5>
                      <p>{el.About.slice(0, 200)}</p>
                      <p className="inStock">In stock</p>
                      <p>Eligible for FREE Shipping</p>

                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />
                      <p className="GiftLine">
                        <input type="checkbox" /> This will be gift <span>Learn More</span>
                      </p>
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
                      <StripeCheckout
                        stripeKey="pk_test_51JnmX3SEitXE1qwuPZ5QVxng2A0KWxeybQ5pjk27OYSQ3eiFKLEv7ir4ntHzjS84qXaSe8xtE4DPzledgLZf90BA00iqC6tMFG"
                        token={TokenHandler}
                        className="payDiv"
                        amount={totalPrice * 100}
                        billingAddress
                        shippingAddress
                      />
                    </>
                  ) : (
                    <div>Empty ({selector.length} item)</div>
                  )}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopPage;
