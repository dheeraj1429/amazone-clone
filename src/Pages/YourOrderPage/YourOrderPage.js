import React from "react";

import { useSelector } from "react-redux";

import "./YourOrderPage.css";

function YourOrderPage() {
  const selector = useSelector((state) => state.user);

  return (
    <div className="youOrderDiv">
      <div className="Container">
        <div className="yourOrderCard">
          <h1>{selector.listClone.length > 0 ? "Your Order" : "Empty"}</h1>
          <div className="InnrDivPro">
            {selector.listClone.length > 0
              ? selector.listClone.map((el) => (
                  <div className="YourOrderInnerDiv" key={el.id}>
                    <div className="YourOrderImgDiv">
                      <img src={el.posterUrl} />
                    </div>
                    <div className="YourOrderContentDiv">
                      <h2>{el.Discription}</h2>
                      <p>{el.About.slice(0, 200)}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrderPage;
