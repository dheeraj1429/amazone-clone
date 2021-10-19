import React from "react";

import "./CustomButtonComponent.css";

function CustomButtonComponent({ data, extraClass }) {
  return (
    <button type="button" className={extraClass ? `CustomButtonComponent ${extraClass}` : `CustomButtonComponent`}>
      {data}
    </button>
  );
}

export default CustomButtonComponent;
