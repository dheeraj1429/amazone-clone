import React from "react";

import "./CustomButtonComponent.css";

export const CustomButtonComponent = ({ data, extraClass, onClickData }) => {
  return (
    <button
      type="button"
      className={extraClass ? `CustomButtonComponent ${extraClass}` : `CustomButtonComponent`}
      onClick={onClickData ? onClickData : null}
    >
      {data}
    </button>
  );
};
