import React, { useState } from "react";
import { Link } from "react-router-dom";

import { setWishList } from "../../Redux/Action/action";

import { useDispatch } from "react-redux";

import "./ProductsComponent.css";

function ProductsComponent({ id, posterUrl, Discription, Deal_of_the_Day, shortTitle, rating, anwsered, offer, shortImages, About, ragulerPrice }) {
  const dispatch = useDispatch();

  return (
    <div className="ProductsDiv">
      <div className="ProductsCardDiv">
        <h1>{Discription}</h1>
        <Link
          to={{
            pathname: `/Products:${shortTitle.replaceAll(" ", "_")}`,
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
              ragulerPrice,
            },
          }}
        >
          <div className="ProducDiv">
            <img src={posterUrl} alt="..." />
          </div>
        </Link>
        <div className="PriceDiv">
          <p>See all offers</p>
          <p
            className="wishListLink"
            onClick={() =>
              dispatch(
                setWishList({
                  posterUrl,
                  Deal_of_the_Day,
                  Discription,
                  shortTitle,
                  offer,
                  ragulerPrice,
                  id,
                  shortImages,
                  About,
                })
              )
            }
          >
            Add to wishlist
          </p>
          <p>₹ {Deal_of_the_Day}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
