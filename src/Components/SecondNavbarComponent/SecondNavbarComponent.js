import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./SecondNavbarComponent.css";

function SecondNavbarComponent() {
  const selector = useSelector((state) => state.user.NavbarData);

  return (
    <div className="SecondNavbar">
      {selector.map((el) => (
        <p key={el.name}>
          {el.name == "All" ? (
            <div>
              <i class="fas fa-bars"></i> {<Link to="/">{el.name}</Link>}
            </div>
          ) : (
            <Link to={`/Category:${el.name.replaceAll(" ", "_")}`}>
              <p>{el.name}</p>
            </Link>
          )}
        </p>
      ))}

      <img src="./Images/bannerOne.jpg" />
    </div>
  );
}

export default SecondNavbarComponent;
