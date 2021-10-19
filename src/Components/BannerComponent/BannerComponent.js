import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Redux/Action/action";

import ProductsComponent from "../ProductsComponent/ProductsComponent";
import { AllProducts } from "../Products/Products.uitil";

import "./BannerComponent.css";

function BannerComponent() {
  const [ProductsData, setProductsData] = useState({
    productsCollection: AllProducts,
  });

  const selector = useSelector((state) => state.user.listData.data);
  const dispatch = useDispatch();

  let filterData;
  if (selector) {
    filterData = selector.filter((el, idx) => idx < 4);
  }

  useEffect(() => {
    dispatch(setData(ProductsData.productsCollection));
  }, []);

  return (
    <div className="BannerSection">
      <div className="Container">
        <div className="BannerDiv"></div>
        <div className="Spacer"></div>
        <div className="ProductsContainer">
          {selector ? filterData.map(({ id, ...otherProps }) => <ProductsComponent key={id} {...otherProps} />) : null}
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
