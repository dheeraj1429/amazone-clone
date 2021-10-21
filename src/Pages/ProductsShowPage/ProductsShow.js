import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setWishList } from "../../Redux/Action/action";

import { CustomButtonComponent } from "../../Components/CustomButtonComponent/CustomButtonComponent";

import "./ProductsShow.css";

function ProductsShow(props) {
  const [ImgUrl, setImgUrl] = useState(false);
  const { id, posterUrl, Discription, Deal_of_the_Day, shortTitle, rating, anwsered, offer, shortImages, About, ragulerPrice } = props.location.data;

  const dispatch = useDispatch();

  return (
    <div className="ProductsShowDiv">
      <div className="Container">
        <div className="ProductsContainerDiv">
          <div className="ShortImages">
            {shortImages.map((el) => (
              <img src={el.url} onMouseEnter={() => setImgUrl(el.url)} />
            ))}
          </div>
          <div className="ImgDivContent">
            <img src={ImgUrl == "" ? posterUrl : ImgUrl} />
          </div>
          <div className="productsContent">
            <h2>{Discription}</h2>
            <div className="RatinDiv">
              <div className="AmazoneChoice">
                Amamzone <span>Choice</span>
              </div>
              <p>{rating}</p>
              <p>{anwsered}</p>
            </div>

            <div className="MrpDiv">
              <p>
                M.R.P:
                <span>
                  <strike>{ragulerPrice}</strike>
                </span>
              </p>
              <p>
                Deal of the day: <span className="DayOffer">{Deal_of_the_Day}</span>
              </p>
              <p>
                Your Save: <span>{(100 - (Deal_of_the_Day / ragulerPrice) * 100).toFixed(0)}%</span> ,Includes all taxes
              </p>
            </div>

            <div className="DropingDiv">
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" />
                <p>Pay on Delivery</p>
              </div>
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />
                <p>7 Days Replacement</p>
              </div>
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" />
                <p>Amazon Delivered</p>
              </div>
              <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />
                <p>1 Year Warranty</p>
              </div>
            </div>

            <div className="AboutDiv">
              <h2>About</h2>
              <p>
                {About.split(".").map((el) => (
                  <p>{el}</p>
                ))}
              </p>
            </div>

            <CustomButtonComponent
              data={"Add To Wishlist"}
              type={"button"}
              onClickData={() =>
                dispatch(
                  setWishList({
                    posterUrl,
                    Deal_of_the_Day,
                    shortTitle,
                    offer,
                    ragulerPrice,
                    id,
                  })
                )
              }
            />
            <CustomButtonComponent data={"Buy Now"} extraClass={"AddToCard"} type={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsShow;
