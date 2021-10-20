import React, { useState } from "react";

import { CustomButtonComponent } from "../../../Components/CustomButtonComponent/CustomButtonComponent";

import { signInWithGoogle } from "../../../Components/Firebase/Firebase.utili";

import "./SignInComponent.css";

function SignInComponent() {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const ChangeValueHander = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  return (
    <div className="SignInDiv">
      <h1>Sign-In</h1>
      <p>Name</p>
      <input type="text" name="name" value={UserData.name} onChange={ChangeValueHander} />
      <p>Email</p>
      <input type="email" name="email" value={UserData.email} onChange={ChangeValueHander} />
      <p>Password</p>
      <input type="password" name="password" value={UserData.password} onChange={ChangeValueHander} />
      <p>Conform Password</p>
      <input type="password" name="conformPassword" value={UserData.conformPassword} onChange={ChangeValueHander} />

      <div className="ButtonGroup">
        <CustomButtonComponent data={"Sign In"} extraClass={"WideButton"} />
        <CustomButtonComponent data={"Sign in with google"} extraClass={"WideButton GoogleButton"} onClickData={signInWithGoogle} />
      </div>
    </div>
  );
}

export default SignInComponent;
