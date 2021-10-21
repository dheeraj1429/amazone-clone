import React from "react";

import "./CustomButtonComponent.css";

export const CustomButtonComponent = ({ data, extraClass, onClickData, type }) => {
  return (
    <button
      type={type}
      className={extraClass ? `CustomButtonComponent ${extraClass}` : `CustomButtonComponent`}
      onClick={onClickData ? onClickData : null}
    >
      {data}
    </button>
  );
};
