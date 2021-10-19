import React from "react";
import { Link } from "react-router-dom";
import "./ProductsComponent.css";

function ProductsComponent({ posterUrl, Discription, Deal_of_the_Day, shortTitle, rating, anwsered, offer, shortImages, About }) {
  return (
    <div className="ProductsDiv">
      <div className="ProductsCardDiv">
        <h1>{Discription}</h1>
        <Link
          to={{
            pathname: `/Products:${shortTitle}`,
            data: {
              posterUrl,
              Discription,
              Deal_of_the_Day,
              shortImages,
              shortTitle,
              rating,
              anwsered,
              offer,
              About,
            },
          }}
        >
          <div className="ProducDiv">
            <img src={posterUrl} alt="..." />
          </div>
        </Link>
        <div className="PriceDiv">
          <p>See all offers</p>
          <p>₹ {Deal_of_the_Day}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
