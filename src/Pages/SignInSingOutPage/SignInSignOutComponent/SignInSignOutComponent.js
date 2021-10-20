import React from "react";

import SignInComponent from "../SignInComponent/SignInComponent";

import "./SignInSignOutComponent.css";

function SignInSignOutComponent() {
  return (
    <div className="Container">
      <div className="SignInDivCover">
        <SignInComponent />
      </div>
    </div>
  );
}

export default SignInSignOutComponent;
