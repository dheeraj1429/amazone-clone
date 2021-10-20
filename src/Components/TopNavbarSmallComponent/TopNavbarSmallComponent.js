import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../Firebase/Firebase.utili";

import "./TopNavbarSmallComponent.css";

function TopNavbarSmallComponent({ title, subtitle, shortName }) {
  return (
    <div>
      <p
        onClick={() => (title == "Log Out" ? auth.signOut() : null)}
        style={{
          cursor: title === "Log Out" ? "pointer" : "",
        }}
      >
        {title !== `Hello! ${shortName}` && title !== "Hello" && title !== "Log Out" ? (
          <Link to={`/User:${title.replaceAll(" ", "_")}`}>{title}</Link>
        ) : (
          title
        )}
      </p>
      <Link
        to={{
          pathname: `${subtitle.replaceAll(" ", "_")}`,
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
