import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SendData } from "../../Redux/Action/action";
import "./SearchComponent.css";

function SearchComponent() {
  const [SearchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();

  const StoreValueEvent = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className="SearchDiv">
      <div className="DropDownMenuDiv">
        <p>All</p>
        <i class="fas fa-sort-down"></i>
      </div>
      <input type="search" placeholder="Search" value={SearchItem} onChange={StoreValueEvent} />
      <div className="searchIcon" onClick={() => dispatch(SendData(SearchItem))}>
        <i class="fas fa-search "></i>
      </div>
    </div>
  );
}

export default SearchComponent;
