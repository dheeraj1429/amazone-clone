import React from "react";
import "./ProductsShow.css";

function ProductsShow(props) {
  console.log(props.location.data);
  const { posterUrl, Discription, Deal_of_the_Day, shortTitle, rating, anwsered, offer, shortImages, About } = props.location.data;
  return (
    <div className="ProductsShowDiv">
      <div className="Container">
        <div className="ProductsContainerDiv">
          <div className="ImgDivContent">
            <img src={posterUrl} />
          </div>
          <div className="productsContent">
            <h2>{Discription}</h2>
            <div className="RatinDiv">
              <p>{rating}</p>
              <p>{anwsered}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsShow;
