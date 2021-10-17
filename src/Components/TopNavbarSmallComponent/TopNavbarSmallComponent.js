import React from "react";
import { Link } from "react-router-dom";

import "./TopNavbarSmallComponent.css";

function TopNavbarSmallComponent({ title, subtitle }) {
  return (
    <div>
      <p>{title !== "Hello" ? <Link to={title.replaceAll(" ", "_")}>{title}</Link> : title}</p>
      <Link
        to={{
          pathname: `/${subtitle.replaceAll(" ", "_")}`,
        }}
      >
        <h3>
          {subtitle == "Account & Lists" ? (
            <div>
              {subtitle} <i class="fas fa-sort-down"></i>
            </div>
          ) : (
            subtitle
          )}
        </h3>
      </Link>
    </div>
  );
}

export default TopNavbarSmallComponent;
