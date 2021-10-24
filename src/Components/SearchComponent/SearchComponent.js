import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SendData } from "../../Redux/Action/action";
import "./SearchComponent.css";

function SearchComponent() {
  const [SearchItem, setSearchItem] = useState("");
  const selector = useSelector((state) => state.user.listData.data);
  const dispatch = useDispatch();

  let filterDataArray;
  if (selector) {
    filterDataArray = selector.filter((el) => el.shortTitle.toLowerCase().includes(SearchItem.toLowerCase()));
  }

  const StoreValueEvent = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className="SearchDiv">
      <div className={SearchItem !== "" ? "CardSearchDiv ShowDiv" : "CardSearchDiv"}>
        <div className="SearchCard">
          <div className="SearchContentDiv">
            {selector
              ? filterDataArray.map((el) => (
                  <Link
                    to={{
                      pathname: `/Products:${el.shortTitle.replaceAll(" ", "_")}`,
                      data: {
                        posterUrl: el.posterUrl,
                        Discription: el.Discription,
                        Deal_of_the_Day: el.Deal_of_the_Day,
                        shortImages: el.shortImages,
                        shortTitle: el.shortTitle,
                        rating: el.rating,
                        anwsered: el.anwsered,
                        offer: el.offer,
                        About: el.About,
                        ragulerPrice: el.ragulerPrice,
                      },
                    }}
                  >
                    <h1 onClick={() => setSearchItem("")}>{el.shortTitle}</h1>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="DropDownMenuDiv">
        <p>All</p>
        <i class="fas fa-sort-down"></i>
      </div>
      <input type="search" placeholder="Search" value={SearchItem} onChange={StoreValueEvent} />
      <div
        className="searchIcon"
        onClick={() => {
          dispatch(SendData(SearchItem));
          setSearchItem("");
        }}
      >
        <i class="fas fa-search "></i>
      </div>
    </div>
  );
}

export default SearchComponent;
